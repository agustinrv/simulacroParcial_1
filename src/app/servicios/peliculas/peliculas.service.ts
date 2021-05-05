import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Actor } from 'src/app/clases/actor';
import {HttpClient} from"@angular/common/http";
import { Pelicula } from 'src/app/clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  public pathColeccion:string = "/peliculas"
  public referenciaAlaColeccion: AngularFirestoreCollection<Pelicula>;

  constructor(private bd:AngularFirestore,private http:HttpClient) 
  { 
    this.referenciaAlaColeccion=bd.collection(this.pathColeccion);
  }

  public getPeliculas()
  {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=2eccfb3bcaf702152fac575dea5d2ab8");
  }

  public AgregarUno(nuevoObjeto:Pelicula)
  {
    return this.referenciaAlaColeccion.add({...nuevoObjeto});
  }

  public TraerTodos()
  {
     return this.referenciaAlaColeccion;
  }

  public BorrarUno(id:string)
  {
    return this.referenciaAlaColeccion.doc(id).delete();
  }

  public ModificarUno(id:string,usuario:Actor)
  {
    return this.referenciaAlaColeccion.doc(id).update(usuario);
  }




}
