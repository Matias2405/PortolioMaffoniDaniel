import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-primer-info',
  templateUrl: './primer-info.component.html',
  styleUrls: ['./primer-info.component.css']
})
export class PrimerInfoComponent implements OnInit {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data))
  }

}
