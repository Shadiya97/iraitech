import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicComponent } from './magic/magic.component';
import { SeriesComponent } from './series/series.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'magic' ,component:MagicComponent},
  {path:'series' ,component:SeriesComponent},
  {path:'form' ,component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
