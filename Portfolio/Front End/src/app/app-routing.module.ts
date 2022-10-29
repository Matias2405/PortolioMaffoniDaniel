import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditprimerinfoComponent } from './components/primer-info/editprimerinfo.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';
import { NewproyectosComponent } from './components/proyectos/newproyectos.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditsolapaComponent } from './components/solapa/editsolapa.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editedu/:id',component:EditeducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'nuevoproy',component:NewproyectosComponent},
  {path:'editproy/:id',component:EditproyectosComponent},
  {path:'editprimerinfo/:id', component:EditprimerinfoComponent},
  {path:'editsolapa/:id', component:EditsolapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
