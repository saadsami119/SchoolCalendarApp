import { Injectable, Inject } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { User } from "../models/user.model";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { HttpService} from "./http.service";
@Injectable()
export class AuthService {

    constructor(private router: Router, private http: Http) {
        this.router = router;
    }

    authenticateUser(user: User): Observable<boolean> {
        return this.http.get("/api/account/login")
            .map((response) => {
                let responseData = response.json();
                if (responseData.successful === false) {
                    throw new Error(responseData.error);
                }

                return  responseData.data;
                
            })
            .catch(error => this.handleError(error));
    }

    isUserNotAuthenticated(): boolean {
        return Cookie.get('userid') === null;
    }
    redirectToLogin(): void {
        this.router.navigate(['/login']);
    }

    isUserSignedIn(): boolean {
        return false;
    }

    //private extractData(res: Response) {
    //    let body = res.json();
    //    console.log(body.successful);
    //    return body.successful;
    //}
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
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
}