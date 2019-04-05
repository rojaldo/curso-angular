export class Apod {
    title: string;
    explanation: string;
    date: Date = new Date();
    mediaType: string;
    url: string;

    constructor(json: any) {
        this.title = json.title;
        this.explanation = json.explanation;
        this.date.setFullYear(json.date.year);
        this.date.setMonth(json.date.month);
        this.date.setDate(json.date.day);
        this.mediaType = json.media_type;
        this.url = json.url;
    }
}
