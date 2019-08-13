import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavBarComponent } from './nav-bar.component';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [NavBarComponent, AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class NavBarModule { }
