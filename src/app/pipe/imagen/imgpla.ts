import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMG } from '../../config/url.servicios';
@Pipe({
  name: 'imgpla',
})
export class ImagenPlaPipe implements PipeTransform {

  transform(codigo: string) {
    return URL_IMG+"assets/plato/"+codigo;
  }
}
