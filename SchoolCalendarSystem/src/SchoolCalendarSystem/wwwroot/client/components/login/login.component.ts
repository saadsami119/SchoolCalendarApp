import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { RouterService } from "../../services/router.service";
import { Toast } from "../../models/toast.model";
import { UiToast } from "../../interfaces/toast.interface";

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html"
})

export class LoginComponent implements OnInit, UiToast {
    public loginForm: FormGroup;
    public toast: Toast;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private routerService: RouterService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['asa@rer.com', Validators.required],
            password: ['asa', Validators.required]
        });
        this.toast = new Toast();
    }

    loginUser(user: User, isValid: boolean): void {
        this.authService.authenticateUser(user)
            .subscribe(isUserAuthenticated => {
                if (!isUserAuthenticated) { this.routerService.navigateToRoute("Login"); }
            },
            error => { this.toast.errorToast(error, "caption"); });
    }

}
