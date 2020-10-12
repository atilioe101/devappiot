import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts'
import { toast } from 'angular2-materialize'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';
import { ChartComponent } from './components/grafico/chart.component';
import { MedicionComponent } from './components/medicion/medicion.component';
import { DispositivoService } from './service/dispositivo/dispositivo.service';
import { MedicionService } from './service/medicion/medicion.service';
import {Celsius} from './pipes/celsius.pipe';
import {FormatDate} from './pipes/date.pipe';
import {Resaltar} from './directive/resaltar.directive';

@NgModule({
  declarations: [
    AppComponent,
    DispositivoComponent,
    MedicionComponent,
    ChartComponent,
    Celsius,
    FormatDate,
    Resaltar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule.forRoot(),    
  ],
  providers: [DispositivoService, MedicionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
