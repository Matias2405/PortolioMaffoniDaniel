import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  logoE: string ;
    

  constructor(private storage: Storage,private sExperiencia: SExperienciaService, private router: Router, private activatedRouter: ActivatedRoute ) {
      }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.logoE);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    })
  }
      
 
}

