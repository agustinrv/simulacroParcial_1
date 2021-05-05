import { PeliculasService } from '../../servicios/peliculas/peliculas.service';
import { Pelicula } from './../../clases/pelicula';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public listaPeliculas:any[]=[];
  public peliculaSeleccionada=false;

  constructor(private servicePeliculas:PeliculasService) {

    
   }

  ngOnInit(){
      this.servicePeliculas.TraerTodos().valueChanges().subscribe((data)=>{
          this.listaPeliculas=data;
      });
  }

  public RecibirPelicula($event)
  {
    
      this.peliculaSeleccionada=$event;
      
  }

  public EliminarPelicula($event)
  {
    console.log($event);
    this.listaPeliculas=this.listaPeliculas.filter((value,index,array)=>{
        return value.id!=$event.id;
    });
    this.peliculaSeleccionada=false;
  }

  public ModificarPelicula($event)
  {
    this.listaPeliculas.forEach(element => {
        if(element.id==$event.id)
        {
          element=$event;
        }
    });

    this.peliculaSeleccionada=$event;
  }
  
   



}
