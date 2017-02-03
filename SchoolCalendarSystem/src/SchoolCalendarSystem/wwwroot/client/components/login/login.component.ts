import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import User from "../../models/user.model";
import AuthService from "../../services/auth.service";
import RouterService from "../../services/router.service";
import { Observable } from 'rxjs/Rx';
import Alert from "../../models/alert.model"

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html"
})

export default class LoginComponent implements OnInit {
    loginForm: FormGroup;
    alerts: Array<Alert>;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private routerService: RouterService) {
    }

    ngOnInit() {

        this.loginForm = this.formBuilder.group({
            username: ['saad@gmail.com', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")])],
            password: ['saad', Validators.required]
        });

        this.alerts = new Array<Alert>();
    }

    loginUser(user: User, isValid: boolean): void {
        this.authService.authenticateUser(user)
            .subscribe(authenticatedUserId => {
                if (authenticatedUserId == null) {
                    this.alerts.push(new Alert("Invalid username or pasword. Please try again.", "error", "Failure !"));
                    return;
                }

                this.authService.setLogedInUserInfo(authenticatedUserId, user.username)
                this.routerService.navigateToRoute("calendar");
            },
            error => { this.alerts.push(new Alert(error, "error", "Failure !")) })
    }
}
