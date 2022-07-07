import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';

import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
