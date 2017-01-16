import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import  User  from "../../models/user.model";
import  AuthService  from "../../services/auth.service";
import  RouterService  from "../../services/router.service";
import  Toast  from "../../models/toast.model";
import { UiToast } from "../../interfaces/toast.interface";

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html"     
})

export default class LoginComponent implements OnInit, UiToast {
    loginForm: FormGroup;
    toast: Toast;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private routerService: RouterService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['saad@gmail.com', Validators.required],
            password: ['saad', Validators.required]
        });
        this.toast = new Toast();
    }

    loginUser(user: User, isValid: boolean): void {
        this.authService.authenticateUser(user)
            .subscribe(authenticatedUserId => {
                if (authenticatedUserId == null) {
                    this.toast.errorToast("Invalid username or pasword. Please try again.", "Login Failure !");
                    return;
                }
                this.authService.setLogedInUserInfo(authenticatedUserId, user.username)
                this.routerService.navigateToRoute("calendar");
            },
            error => { this.toast.errorToast(error, "Error!"); });
    }

}
