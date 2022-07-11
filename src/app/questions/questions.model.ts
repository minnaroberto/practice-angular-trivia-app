export class Questions {
  public question: any[];
  public answer: string;
  public options: any[];

  constructor(question: any[], answer: string, options: any[]) {
    this.question = question;
    this.answer = answer;
    this.options = options;
  }
}
