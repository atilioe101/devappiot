import { MedicionService } from '../../service/medicion/medicion.service';
import { Component, OnInit } from '@angular/core';
import { Medicion } from '../../support/medicion';
import {FormatDate} from '../../pipes/date.pipe';

@Component({
    selector: 'app-medicion',
    templateUrl:'medicion.component.html',
    providers: [ FormatDate ]
})

export class MedicionComponent implements OnInit {
    public mediciones: Medicion[];
    public title: string;

    constructor(private srv: MedicionService) {        
    }

    ngOnInit() {
      this.title = 'Mediciones';
    }   

    public getLogEntry(dispId: number) {
        let self = this;
        this.srv.getAll(dispId.toString())
        .subscribe((data: any) => {
          self.mediciones = <Medicion[]> data;         
        });  
    }

}