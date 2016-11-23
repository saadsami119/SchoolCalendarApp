import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

    private domain: string = "";

    constructor(private http: Http) {
    }

    get(url: string): Observable<Response> {
      return   this.http.get(url);
    }
}