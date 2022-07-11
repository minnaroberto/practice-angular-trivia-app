import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { CategoryMenuComponent } from './category-menu.component';
import { CategoryMenuService } from './category-menu.service';
import { QuestionsComponent } from '../questions/questions.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CategoryMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryMenuComponent,
      },
    ]),
    ButtonModule,
    CardModule,
  ],
  exports: [RouterModule],
  providers: [CategoryMenuService],
})
export class CategoryMenuModule {}
