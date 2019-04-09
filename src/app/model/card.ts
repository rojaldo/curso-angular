export class Card {
    question = '';
    correctAnswer = '';
    category = '';
    difficulty = '';
    answers: string[] = [];
    responded = false;
    respondedIndex = -1;
    constructor(json: any) {
        this.question = json.question;
        this.correctAnswer = json.correct_answer;
        this.answers = json.incorrect_answers;
        this.answers.push(this.correctAnswer);
        this.category = json.category;
        this.difficulty = json.difficulty;
    }
}
