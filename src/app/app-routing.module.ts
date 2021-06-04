import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaianerComponent } from './contaianer/contaianer.component';

const routes: Routes = [
  {path: "",component:ContaianerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
