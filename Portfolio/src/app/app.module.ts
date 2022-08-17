import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgentinaComponent } from './components/logo-argentina/logo-argentina.component';
import { SocialComponent } from './components/social/social.component';
import { SolapaComponent } from './components/solapa/solapa.component';
import { PrimerInfoComponent } from './components/primer-info/primer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgentinaComponent,
    SocialComponent,
    SolapaComponent,
    PrimerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
