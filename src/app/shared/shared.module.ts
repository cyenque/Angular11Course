import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
    imports:[CommonModule],
    exports:[
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations:[],
    entryComponents:[],
    providers:[]
})
export class SharedModule {}