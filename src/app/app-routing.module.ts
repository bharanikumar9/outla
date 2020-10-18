import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import {ContactPageComponent} from './contact-page/contact-page.component'
const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: '', component: ContactPageComponent ,pathMatch: 'full'},
  {path: 'contact', component: ContactPageComponent },
  {path: '**', redirectTo: '/contact'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
