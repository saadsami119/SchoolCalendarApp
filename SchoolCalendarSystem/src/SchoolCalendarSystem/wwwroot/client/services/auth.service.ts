import { Injectable, Inject } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { User } from "../models/user.model";
import { HttpService } from "./http.service";
import { JsonReponse } from "../models/jsonResponse";
import { Observable } from "rxjs/Observable";
import { URLSearchParams } from "@angular/http";

@Injectable()
export class AuthService {

    constructor(private httpService: HttpService) {
    }

    authenticateUser(user: User): Observable<boolean> {
        let params = new URLSearchParams();
        params.set("username", user.username);
        params.set("password", user.password);

        return this.httpService.get("/api/account/login",params);
    }

    isUserNotAuthenticated(): boolean {
        return Cookie.get('USER_ID') === null;
    }
}