import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {

  @Input() listaDePeliculas:any[]=[];
  @Output() peliculaSeleccionada:EventEmitter<any>=new EventEmitter<any>();

  constructor() 
  { 
      
  }
  ngOnInit(): void {
    
  }
  
  MostrarDetalles(pelicula:any)
  {
      this.peliculaSeleccionada.emit(pelicula);
  }
  

}
