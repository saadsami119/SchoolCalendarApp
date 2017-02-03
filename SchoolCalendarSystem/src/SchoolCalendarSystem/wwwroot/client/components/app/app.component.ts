import { Component , OnInit } from '@angular/core';
import  HttpService  from '../../services/http.service';
import  RouterService  from '../../services/router.service';
import  AuthService  from "../../services/auth.service";
import  AppointmentService  from "../../services/appointment.service";
import CalendarService from "../../services/calendar.service";
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "app.component.html",
    providers: [HttpService, RouterService, AuthService, AppointmentService, CalendarService],
    })

export class AppComponent implements OnInit {

 constructor(private authService: AuthService, private routerService: RouterService) { }

 ngOnInit() {            

       if(!this.authService.isUserLoggedIn()){
            this.routerService.navigateToRoute("login")
                }
        
    }

}