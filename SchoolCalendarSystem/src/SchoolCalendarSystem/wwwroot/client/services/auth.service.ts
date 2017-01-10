import { Injectable, Inject } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import User  from "../models/user.model";
import  HttpService  from "./http.service";
import JsonReponse  from "../models/jsonResponse";
import { Observable } from "rxjs/Observable";
import { URLSearchParams } from "@angular/http";

@Injectable()
export default class AuthService {

private logedInUserId : number;
private logedInUserName : string;

    constructor(private httpService: HttpService) {
    }

    authenticateUser(user: User): Observable<number> {
        let params = new URLSearchParams();
        params.set("username", user.username);
        params.set("password", user.password);

        return this.httpService.get1("/api/account/login",params);
    }

    isUserAuthenticated(): boolean {
       return this.logedInUserId != null;
    }

    setLogedInUserInfo(userId : number, username : string){
        this.logedInUserName = username;
        this.logedInUserId = userId;
    }
}