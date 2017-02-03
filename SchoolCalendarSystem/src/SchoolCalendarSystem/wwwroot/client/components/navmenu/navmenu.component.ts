import { Component, OnInit } from '@angular/core';
import  AuthService from "../../services/auth.service";
@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: "navmenu.component.html"    
})

export default class NavMenuComponent implements OnInit{
    loginedInUserName : string;

    constructor(private authService: AuthService) {       
    }

    ngOnInit(){
        this.loginedInUserName = this.authService.getLoginUserName();
    }

    onLogOut(){

    }

}
