import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class FormatDate implements PipeTransform {
    transform(value: string, args?: any): string {
        var d = new Date(value);        
        return d.toLocaleDateString('es-AR') + ' ' + d.toLocaleTimeString('es-AR').substring(0,5); 
    }
}
