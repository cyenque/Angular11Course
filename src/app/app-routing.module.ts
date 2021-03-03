import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./security/welcome/welcome.component";

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'}
        ])
    ],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule {}