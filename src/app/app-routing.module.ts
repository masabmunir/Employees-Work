import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Comp1Component} from "./comp1/comp1.component";
import {LoginComponent} from "./Components/login/login.component";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";

const routes: Routes = [

  // {path:'', component:Comp1Component}

  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
