import { Injectable} from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";


@Injectable()
export default class RouterService {
    constructor(private router: Router) {
    }

    navigateToRoute(route: string) {
        this.router.navigate([route]);
    }    
}
