import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'celsius' })
export class Celsius implements PipeTransform {
    transform(value: string, args?: any): string {
        return value + ' ºC';
    }
}
