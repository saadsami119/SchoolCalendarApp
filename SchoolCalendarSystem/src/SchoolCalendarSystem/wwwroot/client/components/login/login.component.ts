import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html",
    providers : [AuthService]
})

export class LoginComponent {
    public loginForm: FormGroup;
    private _authService: AuthService;

    // TODO : ngInit
    constructor(private _fb: FormBuilder , authService : AuthService) {
        this._authService = authService;
        this.loginForm = _fb.group({
            username: ['asa@rer.com', Validators.required],
            password : ['asa',Validators.required]
        });
    }

    loginUser(user: User, isValid: boolean): void {

        this._authService.authenticateUser(user)
            .subscribe(isUserAuthenticated => {
                if (!isUserAuthenticated) {
                    this._authService.redirectToLogin();
                }
            }, error => {
                console.log(error);
            });


    }

}
