import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CategoryMenuService } from './category-menu/category-menu.service';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
  ],
  providers: [CategoryMenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
