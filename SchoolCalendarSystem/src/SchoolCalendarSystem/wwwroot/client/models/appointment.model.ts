export class Appointment {
    start: Date;
    end: Date;
    description: string;

    constructor(private startDateTime: Date, private endDateTime: Date, private desc: string) {
        this.start = startDateTime;
        this.end = endDateTime;
        this.description = desc;
    }
}