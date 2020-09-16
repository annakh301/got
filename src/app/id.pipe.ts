import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'id'
})
export class IdPipe implements PipeTransform {
    transform(value: any) {
        return value.substring(value.lastIndexOf('/') + 1);
    }
}