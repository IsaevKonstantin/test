import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'shared';
import { AppPageComponent } from './app-page.component';
import { AppPageRoutingModule } from './app-page.routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [AppPageComponent],
    imports: [
        HttpClientModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        AppPageRoutingModule,
        InputTextModule,
        ButtonModule,
    ],
})
export class AppPageModule {}
