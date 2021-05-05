import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores/actores.service';
import { PaisesService } from 'src/app/servicios/paises/paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public listaActores:Actor[]=[];
  public listaPaises:any=[];
  public paisSeleccionado:any=false;
  public nuevoActor:Actor=new Actor();

  constructor(private servicioPaises:PaisesService,private servicioActores:ActoresService) 
  {

  }

  ngOnInit(): void {
    this.servicioPaises.getPaises().subscribe((data)=>{
      this.listaPaises=JSON.parse(JSON.stringify(data));
    });
    this.TraerTodos();
  }

  public SeleccionarPais($event)
  {
      this.paisSeleccionado=$event;
      this.nuevoActor.pais=$event.name;
  }

  public AgregarActor()
  {
    this.servicioActores.AgregarUno(this.nuevoActor).then(()=>{
     this.nuevoActor=new Actor();
     this.paisSeleccionado=false;
     this.TraerTodos();
    });
    alert("Agregado"); 
  }

  public TraerTodos()
  {
    this.servicioActores.TraerTodos().valueChanges().subscribe((data)=>{
        this.listaActores=data;
    });
  }

}
