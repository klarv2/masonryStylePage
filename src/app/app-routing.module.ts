import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  {path:'cards', component: LayoutComponent }
];

@NgModule({
  declarations: [],
  imports: [

  ]
})
export class AppRoutingModule { }
