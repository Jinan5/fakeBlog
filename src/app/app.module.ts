import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostComponent } from './components/lista-post/lista-post.component';
import { DettaglioPostComponent } from './components/dettaglio-post/dettaglio-post.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { FiltroBoxComponent } from './components/filtro-box/filtro-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostComponent,
    DettaglioPostComponent,
    PreferitiComponent,
    FiltroBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
