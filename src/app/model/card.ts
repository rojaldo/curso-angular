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
        this.answers = this.shuffle(this.answers);
    }

    shuffle(a) {
        let j: number;
        let x: number;
        let i: number;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
}
