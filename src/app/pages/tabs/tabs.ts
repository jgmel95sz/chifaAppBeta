import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PlatosPage } from '../platos/platos';
import { RecetasPage } from '../recetas/recetas';
import { GlosarioPage } from '../glosario/glosario';
import { HistoriaPage } from '../historia/historia';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlatosPage;
  tab3Root = RecetasPage;
  tab4Root = GlosarioPage;
  tab5Root = HistoriaPage;

  constructor() {

  }
}
