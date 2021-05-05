import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {

  @Input() pelicula=false;
  @Output() eliminarPelicula:EventEmitter<any>=new EventEmitter<any>();

  constructor() 
  { 

  }

  ngOnInit(): void {
  }

  public BorrarPelicula()
  {
      this.eliminarPelicula.emit(this.pelicula);
  } 

}
