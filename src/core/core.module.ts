import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from './services'

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
    ]
})
export class CoreModule { }
