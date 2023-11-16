import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { ProfilePageComponent } from './profile-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
    { path: '', component: ProfilePageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        ToastModule,
        InputTextModule,
        ButtonModule,
    ],
    declarations: [ProfilePageComponent],
})
export class ProfilePageModule {}
