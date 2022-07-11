import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

const routes: Routes = [
  { path: '', redirectTo: '/poke-quizzes', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'poke-quizzes',
    loadChildren: () =>
      import('./category-menu/category-menu.module').then(
        (m) => m.CategoryMenuModule
      ),
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./questions/questions.module').then((m) => m.QuestionsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ButtonModule,
    ToolbarModule,
    CardModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
