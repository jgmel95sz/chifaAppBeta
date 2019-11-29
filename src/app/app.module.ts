import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { ImagenPipe } from './pipe/imagen/imagen';
import { ImaRecePipe } from './pipe/imagen/imgreceta';
import { ImagenHisPipe } from './pipe/imagen/imghis';
import { ImagenPlaPipe } from './pipe/imagen/imgpla';
import { ImagenChifaPipe } from './pipe/imagen/imgchifa';
import { PlacesPage } from './pages/places/places';
import { ChifasPage } from './pages/chifas/chifas';
import { PlatosPage } from './pages/platos/platos';
import { RecetasPage } from './pages/recetas/recetas';
import { GlosarioPage } from './pages/glosario/glosario';
import { HistoriaPage } from './pages/historia/historia';
import { GlosarioBuscarPage } from './pages/glosario-buscar/glosario-buscar';
import { PlacePage } from './pages/place/place';
import { PlaceStaticPage } from './pages/place-static/place-static';
import { SearchPage } from './pages/search/search';
import { AnimatedHeaderComponent } from './components/animated-header/animated-header';
import { TabsPage } from './pages/tabs/tabs';
import { RecetaIndex } from './services/receta/receta';
import { GlosarioIndex } from './services/glosario/glosario';
import { HistoriaIndex } from './services/historia/historia';
import { PlatoIndex } from './services/plato/plato';
import { HomeIndex } from './services/home/home';


@NgModule({
  declarations: [AppComponent,
    TabsPage,
    ImagenPipe,
    ImaRecePipe,
    ImagenHisPipe,
    ImagenPlaPipe,
    ImagenChifaPipe,
    PlacesPage,
    ChifasPage,
    PlatosPage,
    RecetasPage,
    GlosarioPage,
    HistoriaPage,
    GlosarioBuscarPage,
    PlacePage,
    PlaceStaticPage,
    SearchPage,
    AnimatedHeaderComponent
  ],
  entryComponents: [
    AppComponent,
    TabsPage,
    SearchPage,
    PlacesPage,
    ChifasPage,
    PlatosPage,
    RecetasPage,
    GlosarioPage,
    HistoriaPage,
    GlosarioBuscarPage,
    PlacePage,
    PlaceStaticPage],
  imports: [  HttpModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RecetaIndex,
    GlosarioIndex,
    HistoriaIndex,
    PlatoIndex,
    HomeIndex
   // SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
