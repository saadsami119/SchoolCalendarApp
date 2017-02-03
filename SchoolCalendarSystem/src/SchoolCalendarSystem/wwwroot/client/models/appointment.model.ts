export default class Appointment {
    start: Date;
    end: Date;
    description : string;
    userId : number;

    constructor(private startDateTime: Date, private endDateTime: Date, private desc: string, private userid : number) {
        this.start = startDateTime;
        this.end = endDateTime;
        this.description = desc;
        this.userId = userid;
    }
}