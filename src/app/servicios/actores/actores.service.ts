import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Actor } from 'src/app/clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  public pathColeccion:string = "/actores"
  public referenciaAlaColeccion: AngularFirestoreCollection<Actor>;

  constructor(private bd:AngularFirestore) 
  { 
    this.referenciaAlaColeccion=bd.collection(this.pathColeccion);
  }

  public AgregarUno(nuevoUsuario:Actor)
  {
    return this.referenciaAlaColeccion.add({...nuevoUsuario});
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
