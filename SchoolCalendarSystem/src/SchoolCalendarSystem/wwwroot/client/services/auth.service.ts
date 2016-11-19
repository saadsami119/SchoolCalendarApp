import { Injectable, Inject } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    private _router: Router;
   
    constructor(private router: Router) {
        this._router = router;
    }

    isUserNotAuthenticated(): boolean {
        return Cookie.get('userid') === null;
    }
    redirectToLogin(): void{
        this._router.navigate(['/login']);
    }

    isUserSignedIn(): boolean {
    return false;
}


}