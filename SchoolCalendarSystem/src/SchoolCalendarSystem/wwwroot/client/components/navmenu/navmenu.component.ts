import { Component } from '@angular/core';
import { AuthService} from "../../services/auth.service";
@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: "navmenu.component.html",
    providers: [AuthService]
    
})
export class NavMenuComponent {

    constructor(private authService: AuthService) {
        if (!authService.isUserNotAuthenticated()){}
    }

}
