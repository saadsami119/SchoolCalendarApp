﻿import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { JsonReponse } from "../models/jsonResponse";


@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    get(url: string): Observable<any> {
        return this.http.get(url)
            .map(res => this.convertToJsonResponse(res))
            .catch(error => this.parseErrorMsg(error));
    }

    private parseErrorMsg(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private convertToJsonResponse(res: Response): JsonReponse {
        let resJson = res.json();
        if (resJson.successful === false) {
            throw new Error(resJson.error);
        }
        return resJson.data;
    }
}