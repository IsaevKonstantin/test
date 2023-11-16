import { NgModule } from "@angular/core";
import { ProfilePageComponent } from "./profile-page.component";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: ProfilePageComponent,
      children: []
    }
  ];


@NgModule ({
    imports: [RouterModule.forChild(routes)],
})

export class ProfilePageRoutingModule {}