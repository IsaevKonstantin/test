import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class HomePageRoutingModule {}
