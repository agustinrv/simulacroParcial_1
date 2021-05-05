import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './componentes/peliculas/peliculas-alta/peliculas-alta.component';

const routes: Routes = [
  {path: '', redirectTo: 'peliculas/busqueda', pathMatch: 'full'},
  {path:"peliculas",
   children:
    [
      {path:"busqueda",component:BusquedaComponent},
      {path:"alta",component:PeliculasAltaComponent}
    ]
  },
  {
    path:"actores",
    children:
    [
      {path:"alta",component:ActorAltaComponent}
    ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
