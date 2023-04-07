import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorUnidadesComponent } from './conversor-unidades/conversor-unidades.component';

const routes: Routes = [
  { path: '', component: ConversorUnidadesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
