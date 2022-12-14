import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent implements OnInit {
  nombreP:string;
  descripcionP:string;
  fechaP:string;
  linkP:string;

  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.fechaP, this.linkP);
    this.proyectosS.save(proyectos).subscribe(
      data =>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
