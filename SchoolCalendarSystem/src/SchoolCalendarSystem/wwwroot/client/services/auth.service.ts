import { Injectable, Inject } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { User } from "../models/user.model";
import { HttpService } from "./http.service";
import { JsonReponse } from "../models/jsonResponse";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

    constructor(private httpService: HttpService) {
    }

    authenticateUser(user: User): Observable<boolean> {
        return this.httpService.get("/api/account/login");
    }

    isUserNotAuthenticated(): boolean {
        return Cookie.get('userid') === null;
    }
}