export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    profesion: String;
    descripcion: String;
    img: String;

    constructor(nombre: String, apellido: String, profesion: String, descripcion:String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.img = img;
    }
}