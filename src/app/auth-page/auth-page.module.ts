import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'shared';
import { AuthPageComponent } from './auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthPageRoutingModule } from './auth-page.routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [AuthPageComponent],
    imports: [
        HttpClientModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        AuthPageRoutingModule,
        InputTextModule,
        ButtonModule,
    ],
})
export class AuthPageModule {}
