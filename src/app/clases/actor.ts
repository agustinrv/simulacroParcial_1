export class Actor 
{
    public nombre:string;
    public apellido:string;
    public email:string;
    public edad:number;
    public pais:string;

    public constructor(_nombre="",_apellido="",_email="",_edad=0,_pais="")
    {
        this.nombre=_nombre;
        this.apellido=_apellido;
        this.email=_email;
        this.edad=_edad;
        this.pais=_pais;
    }


}

