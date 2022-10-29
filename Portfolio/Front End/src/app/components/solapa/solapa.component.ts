import { Component, OnInit } from '@angular/core';
import { Solapa } from 'src/app/model/solapa';
import { SolapaService } from 'src/app/service/solapa.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-solapa',
  templateUrl: './solapa.component.html',
  styleUrls: ['./solapa.component.css']
})
export class SolapaComponent implements OnInit {
  solapa: Solapa = null;

  constructor(public solapaService: SolapaService, private tokenService:TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSolapa();
    if(this.tokenService.getToken()){
      this.isLogged = true;
  }else{
    this.isLogged = false;
  }
}
  

  cargarSolapa(){
    this.solapaService.detail(1).subscribe(data=>
      {this.solapa = data}
      )
  }

}
