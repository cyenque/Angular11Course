import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent{
    pageTitle:string;

    constructor(private router:Router){
        this.pageTitle='Login - Seguridad';
    }

    onCancel(){
        this.router.navigateByUrl('/welcome');
    }
}