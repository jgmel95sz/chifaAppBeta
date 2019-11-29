import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlosarioBuscarPage } from './glosario-buscar';

@NgModule({
  declarations: [
    GlosarioBuscarPage,
  ],
  imports: [
    IonicPageModule.forChild(GlosarioBuscarPage),
  ],
})
export class GlosarioBuscarPageModule {}
