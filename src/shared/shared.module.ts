import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileService } from './services';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component'

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ProfileService
    ],
    declarations: [
      SuccessModalComponent,
      ErrorModalComponent
    ]
})
export class SharedModule { }
