import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CategoryMenuService } from '../category-menu/category-menu.service';
import { Category } from '../category-menu/category.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  category: Category = { name: '', questions: [] };
  id: any;
  score: number = 0;
  totalQuestions: number = 0;
  questionsAnswered: number = 0; // keep track of how many questions have been answered
  answeredQuestions: { [key: number]: boolean } = []; // keep track of which questions have been answered correctly and incorrectly

  constructor(
    private categoryMenuService: CategoryMenuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.category = this.categoryMenuService.getCategory(this.id);
    });
    this.totalQuestions = this.category.questions.length;
  }

  checkAnswer(userAnswer: string, answer: string, index: number, ind: number) {
    if (userAnswer === answer) {
      this.answeredQuestions[index] = true;
      this.score++;
    } else {
      this.answeredQuestions[index] = false;
    }
    this.questionsAnswered++;
  }
}
