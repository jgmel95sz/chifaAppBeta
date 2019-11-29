import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMG } from '../../config/url.servicios';
@Pipe({
  name: 'imgchifa',
})
export class ImagenChifaPipe implements PipeTransform {

  transform(codigo: string) {
    return URL_IMG+"assets/chifa/"+codigo;
  }
}
