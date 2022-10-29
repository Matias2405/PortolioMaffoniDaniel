import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solapa } from 'src/app/model/solapa';
import { ImagesolapaService } from 'src/app/service/imagesolapa.service';
import { SolapaService } from 'src/app/service/solapa.service';

@Component({
  selector: 'app-editsolapa',
  templateUrl: './editsolapa.component.html',
  styleUrls: ['./editsolapa.component.css']
})
export class EditsolapaComponent implements OnInit {
  solapa: Solapa = null

  constructor(private activatedRouter: ActivatedRoute, private solapaService: SolapaService, private router: Router, public imagesolapaService: ImagesolapaService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.solapaService.detail(id).subscribe(
      data =>{
        this.solapa = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.solapa.img = this.imagesolapaService.url
    this.solapaService.update(id, this.solapa).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar solapa");
        this.router.navigate (['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "portada_" + id;
    this.imagesolapaService.uploadImage($event, name)
  }
}
