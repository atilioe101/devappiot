import { DispositivoService } from '../../service/dispositivo/dispositivo.service';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Injector, ApplicationRef } from '@angular/core';
import { toast } from 'angular2-materialize';
import {DispositivoItem} from '../../support/dispositivo';
import {Celsius} from '../../pipes/celsius.pipe';

import {ChartComponent} from '../grafico/chart.component';
import {MedicionComponent} from '.././medicion/medicion.component';
import {Resaltar} from '.././../directive/resaltar.directive'

@Component({
    selector: 'app-dispositivo',
    templateUrl:'dispositivo.component.html',
    styleUrls: ['dispositivo.component.css'],
    providers: [ Celsius, Resaltar ]
})

export class DispositivoComponent implements OnInit { 
    private prefix_content_msre: string = 'content_msre_';  
    private prefix_content_chart: string = 'content_chart_';   
    private disp_selected: DispositivoItem;   
    private disp_create: DispositivoItem;   
    public dispositivos: DispositivoItem[];
    public index_selected: number;
    public title: string;    

    constructor(private srv: DispositivoService
      ,private componentFactoryResolver: ComponentFactoryResolver
      ,private viewContainerRef: ViewContainerRef
      ,private injector: Injector
      ,private app: ApplicationRef) {        
    }

    ngOnInit() {
      this.title = 'Dispositivos';
      this.disp_selected = new DispositivoItem;
      this.disp_create = new DispositivoItem;
      let self = this;
      this.srv.getAll()
      .subscribe((data: any) => {        
        self.dispositivos = <DispositivoItem[]> data; 
      });  
    }       

    public update() {            
      let self  = this;    
      if (this.disp_selected.nombre.length == 0 || this.disp_selected.nombre.length == 0) {
        toast('Incompleto, asi no puedo modificar', 3000);
        return;
      }
      this.srv.upd(this.disp_selected) 
      .subscribe(data => {
        toast('Dispositivo modificado', 3000);
        for (let entry of this.dispositivos) {
          if (entry.dispositivoId == self.disp_selected.dispositivoId) {
            entry.nombre = self.disp_selected.nombre;
            entry.ubicacion = self.disp_selected.ubicacion;
          }
        }        
      }, error => {
          console.log(error);
      });       
    }

    public insert() {
      let self  = this;    
      if (this.disp_create.nombre?.length == 0 || this.disp_create.nombre?.length == 0) {
        toast('Incompleto, asi no puedo agregar', 3000);
        return;
      }
      this.srv.insert(this.disp_create) 
      .subscribe(data => {
        toast('Dispositivo agregado', 3000);
        setTimeout(function(){ document.location.reload(); }, 3000);                
      }, error => {
          console.log(error);
      });                        
    }

    public delete() {
      let self  = this;          
      this.srv.delete(this.disp_selected) 
      .subscribe(data => {
        toast('Dispositivo borrado', 3000);
        self.dispositivos.splice(self.index_selected, 1);
      }, error => {
          console.log(error);
      });                        
    }

    private clearElement(nodeElement) {
      while (nodeElement.firstChild) {
        nodeElement.firstChild.remove();
      }
    }

    displayChart(row:DispositivoItem, refresh ?: boolean) {   
      let nodeElementLog = document.getElementById(this.prefix_content_chart + row.dispositivoId);
      let nodeElementMsr = document.getElementById(this.prefix_content_msre + row.dispositivoId);     

      this.clearElement(nodeElementMsr);
      if (nodeElementLog.childNodes.length > 0) {
        this.clearElement(nodeElementLog);        
        if (!refresh) return;
      } else if (refresh) {
        return;
      }     
      const factory = this.componentFactoryResolver.resolveComponentFactory(ChartComponent);      
      const ref = factory.create(this.injector, [], nodeElementLog);
      ref.instance.getLogEntry(row.dispositivoId);
      this.app.attachView(ref.hostView);
      return false;
    }

    displayMedicion(row:DispositivoItem) {   
      let nodeElementLog = document.getElementById(this.prefix_content_chart + row.dispositivoId);
      let nodeElementMsr = document.getElementById(this.prefix_content_msre + row.dispositivoId);  
     
      this.clearElement(nodeElementLog);
      if (nodeElementMsr.childNodes.length > 0) {
        this.clearElement(nodeElementMsr);
        return;
      }     
      const factory = this.componentFactoryResolver.resolveComponentFactory(MedicionComponent);      
      const ref = factory.create(this.injector, [], nodeElementMsr);
      ref.instance.getLogEntry(row.dispositivoId);
      this.app.attachView(ref.hostView);
      return false;
    }

    prepareForUpd(row:DispositivoItem) {
      Object.assign(this.disp_selected, row);               
    }

    prepareForDelete(row:DispositivoItem) {
      let self = this;
      Object.assign(this.disp_selected, row);               
      this.index_selected = this.dispositivos.findIndex(x => x.dispositivoId === self.disp_selected.dispositivoId);                    
    }

    prepareForInsert() {
      var dispId: number = this.dispositivos.length + 1;
      this.disp_create = new DispositivoItem;
      this.disp_create.dispositivoId = dispId;
      this.disp_create.sensores =[{sensorId: dispId.toString() + "S1", tipo : "Temperatura", activo : 1, ultimamedicion : {fecha : (new Date()).toISOString(), valor : 20.2}}];
    }
}