import { Component } from "@angular/core";

@Component({
    templateUrl:'./welcome.component.html',
})
export class WelcomeComponent{
    pageTitle:string;

    constructor(){
        this.pageTitle='Bienvenido a Angular Web Solution';
    }


}