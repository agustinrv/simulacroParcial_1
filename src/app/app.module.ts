import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './componentes/peliculas/peliculas-alta/peliculas-alta.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { TablaPeliculasComponent } from './componentes/peliculas/tabla-peliculas/tabla-peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './componentes/peliculas/detalle-pelicula/detalle-pelicula.component';
import { BorrarPeliculaComponent } from './componentes/peliculas/borrar-pelicula/borrar-pelicula.component';
import { ModificarPeliculaComponent } from './componentes/peliculas/modificar-pelicula/modificar-pelicula.component';
import { TablaPaisesComponent } from './componentes/paises/tabla-paises/tabla-paises.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculasAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculasComponent,
    DetallePeliculaComponent,
    BorrarPeliculaComponent,
    ModificarPeliculaComponent,
    TablaPaisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
