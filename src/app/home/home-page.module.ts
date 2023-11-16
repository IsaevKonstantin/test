import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        HomePageComponent
    ]
})
export class HomePageModule { }
