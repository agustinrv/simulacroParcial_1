import { Pelicula } from './../../../clases/pelicula';
import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises/paises.service';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores/actores.service';
import { PeliculasService } from 'src/app/servicios/peliculas/peliculas.service';

@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent implements OnInit {

  public listapeliculas:Pelicula[]=[];
  public listaActores:Actor[]=[];
  public actoresSeleccionados:Actor[]=[];
  public nuevaPelicula:Pelicula=new Pelicula();

  constructor(private servicioPeliculas:PeliculasService ,private servicioActores:ActoresService) {
    
   }

  ngOnInit(): void {
    this.TraerTodos();
  }

  public TraerTodos()
  {
    this.servicioActores.TraerTodos().valueChanges().subscribe((data)=>{
        this.listaActores=data;
    });

    this.servicioPeliculas.TraerTodos().valueChanges().subscribe((data)=>{
      this.listapeliculas=data;
  })

  }

  public AgregarPelicula()
  {
    this.nuevaPelicula.id=this.GenerarId();
      this.servicioPeliculas.AgregarUno(this.nuevaPelicula).then(()=>{
        this.nuevaPelicula=new Pelicula();
        this.TraerTodos();
        alert("agregado");
      });
  }

  public ActorSeleccionado($event)
  {
    let flag=true;
    this.actoresSeleccionados.forEach(element => {
        if(element.nombre==$event.nombre && element.apellido==$event.apellido)
        {
          flag=false;
        }
      });

      if(flag)
      this.actoresSeleccionados.push($event);  

  }

  public BorrarUnaSeleccionDeActor(unActor)
  {
    this.actoresSeleccionados=this.actoresSeleccionados.filter((value,index,array)=>{
        return (value.nombre!=unActor.nombre || value.apellido!=unActor.apellido)
      });
  }

  public GenerarId()
  {
    let id=0;
    this.listapeliculas.forEach(element => {
        if(element.id>id)
        {
          id=element.id;
        }
    });

    return id+1;
  }
}
