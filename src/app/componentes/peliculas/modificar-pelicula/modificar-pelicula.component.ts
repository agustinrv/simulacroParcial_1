import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  @Input() pelicula:any=false;
  @Output() ModificarPelicula:EventEmitter<any> =new EventEmitter<any>();
  
  constructor() { 

  }

  ngOnInit(): void {
  }

  EnviarPeliculaParaModificar()
  {
    this.pelicula.nombre="modificado";
    this.ModificarPelicula.emit(this.pelicula);
  }

}
