import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // importe o FormsModule
import { RouterModule } from '@angular/router'; // importe o RouterModule

import { AppComponent } from './app.component';
import { ConversorUnidadesComponent } from './conversor-unidades/conversor-unidades.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ConversorUnidadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // adicione o FormsModule às importações
    RouterModule, // adicione o RouterModule às importações
    AppRoutingModule, NgbModule // Importe o módulo de roteamento aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
