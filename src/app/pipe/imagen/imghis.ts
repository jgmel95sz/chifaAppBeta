import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMG } from '../../config/url.servicios';
@Pipe({
  name: 'imghis',
})
export class ImagenHisPipe implements PipeTransform {

  transform(codigo: string) {
    return URL_IMG+"assets/historia/"+codigo;
  }
}
