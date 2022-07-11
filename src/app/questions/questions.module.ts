import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { QuestionsComponent } from './questions.component';
import { CategoryMenuService } from '../category-menu/category-menu.service';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: ':id',
            component: QuestionsComponent,
          },
        ],
      },
    ]),
    ButtonModule,
    CardModule,
  ],
  exports: [RouterModule],
  providers: [CategoryMenuService],
})
export class QuestionsModule {}
