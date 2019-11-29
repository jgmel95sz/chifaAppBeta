import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMG } from '../../config/url.servicios';
@Pipe({
  name: 'imgreceta',
})
export class ImaRecePipe implements PipeTransform {

  transform(codigo: string) {
    return URL_IMG+"assets/img_receta/"+codigo;
  }
}
