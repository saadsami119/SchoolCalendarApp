export class Appointment {
    start: string;
    end: string;
    description: string;

    constructor(start: string, end: string, description: string) {
        this.start = start;
        this.end = end;
        this.description = description;
    }
}