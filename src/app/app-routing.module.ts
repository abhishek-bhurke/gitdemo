import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { ImagesComponent } from './images/images.component';
const routes: Routes = [
{path: 'profile',component: ProfileComponent},
{path: 'form',component: FormComponent},
{path: 'images',component: ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
