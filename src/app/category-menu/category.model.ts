import { Questions } from '../questions/questions.model';
export class Category {
  public name: string;
  public questions: Questions[];

  constructor(name: string, questions: Questions[]) {
    this.name = name;
    this.questions = questions;
  }
}
