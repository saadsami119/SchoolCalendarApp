export class JsonReponse {

    public data: any;
    public error: string;
    public successful: boolean;

    constructor(private _data: any, private _error: string, private _successful: boolean) {
        this.data = _data;
        this.error = _error;
        this.successful = _successful;
    }
}