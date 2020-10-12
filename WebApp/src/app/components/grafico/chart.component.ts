import { element } from 'protractor';
import { MedicionService } from '../../service/medicion/medicion.service';
import { Component,  OnInit } from '@angular/core';
import { Medicion } from '../../support/medicion';
import {FormatDate} from '../../pipes/date.pipe';

declare let google: any;

@Component({
    selector: 'app-chart',
    templateUrl:'chart.component.html',      
    providers: [ FormatDate ]
})

export class ChartComponent implements OnInit   { 
    public chart_data_temp: Array<Array<string | number>>;    
    public chart_data_hum: Array<Array<string | number>>;    
    public medicion_entry: Medicion[];
    public chart_options_temp: any;
    public chart_options_hum: any;
    public title: string;
    public seq: string;        

    constructor(private srv: MedicionService) {        
    }

    ngOnInit() {
      this.seq = new Date().getTime().toString(); 
      this.chart_data_temp = new Array;
      this.chart_data_hum = new Array;   
      this.chart_options_temp =  {      
        title: 'Temperatura (°C)',  
        curveType: 'function',
        legend: 'none',
        series: {
          0: { color: '#12047E' }         
        },
        chartArea:{left:35, width: '100%'}
      };   
      this.chart_options_hum =  {        
        title: 'Humedad (%)',  
        curveType: 'function',
        legend: 'none',
        series: {
          0: { color: '#9F93FC' }         
        },
        chartArea:{left:35, width: '100%'}
      };   
      this.title = 'Gráficos';     
    }     

    public draw() {                       
      let self: ChartComponent = this;   
      let entry: Medicion;
      
      this.medicion_entry = this.medicion_entry.reverse();
      this.chart_data_temp = new Array;
      this.chart_data_hum = new Array;

      for (entry of this.medicion_entry) {
        let date: string  = new FormatDate().transform(entry.fecha);;
        let item: Array<string | number> =  [date, entry.valor];
        switch (entry.tipo) {
          case 'Temperatura':
            self.chart_data_temp.push(item);
            break;
          case 'Humedad':
            self.chart_data_hum.push(item);
            break;
        }
      }

      /*for (entry of this.medicion_entry) {        
        chart_data = dataOfMType.get(entry.tipo);        
        let item: Array<string | number> =  [entry.fecha, entry.valor];                    
        if (chart_data) {          
          dataOfMType.set(entry.tipo, chart_data);
        } else {
          chart_data = new Array;
          chart_data.push(item);
          dataOfMType.set(entry.tipo, chart_data);
        }
      }      

      for (let [k, chart_data] of dataOfMType) {     
        if (k == 'Temperatura') {    
          self.mydata = self.chartDatax
          //self.chart_temp.nativeElement.data =    JSON.stringify(self.mydata);    
          //self.renderer.setAttribute(self.chart_temp.nativeElement, 'data',  JSON.stringify(self.mydata));               
        }
        //this.here.nativeElement.innerHTML = "<google-chart [title]='title' [type]='LineChart' [data]='data' [columnNames]='googleColumnNames' [options]='options' [width]='width' [height]='height'> </google-chart>";   
        //let googleChart = self.renderer.createElement('google-chart');  
        //googleChart.innerHTML = "<google-chart [title]='title' [type]='LineChart' [data]='data'></google-chart>"
        //console.log(chart_data)                        
        //self.renderer.setAttribute(googleChart, 'type',  chart_type);        
        //self.renderer.setAttribute(googleChart, 'data',  JSON.stringify(chart_data));        
        //self.renderer.appendChild(self.elmRef.nativeElement, googleChart);        
        
      } 
      
      return;

      let googleChart = self.renderer.createElement('google-chart');  
      googleChart.data = self.mydata;
      self.renderer.setAttribute(googleChart, 'type',  chart_type);        
      //self.renderer.setAttribute(googleChart, 'data',  JSON.stringify(self.mydata));        
      self.renderer.appendChild(self.content_charts.nativeElement, googleChart);        

    
      /*google.charts.load('current', {'packages':['corechart']});            

      for (let [k, chart_data] of dataOfMType) {             
        let content = self.renderer.createElement('div');                                

        let callback = function(){
          var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
          ]);             
  
          var options = {
            title: '',
            curveType: 'function',
            legend: { position: 'bottom' },
            chartArea:{left:35, top:5, width: '100%'}
          };          
          
          var chart = new google.visualization.LineChart(content);       
          chart.draw(data, options);             
        };  
        google.charts.setOnLoadCallback(callback);   
        console.log(self.elmRef.nativeElement.outerHTML)
        self.renderer.appendChild(self.content_charts.nativeElement, content); 
      }*/

    }   
    
    public getLogEntry(dispId: number) {        
        let self = this;        
        this.srv.getAll(dispId.toString())
        .subscribe((data: any) => {          
          self.medicion_entry = <Medicion[]> data;
          self.draw();         
        });  
    }

}