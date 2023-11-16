import { NgModule } from "@angular/core";
import { ReportsPageComponent } from "./reports-page.component";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: ReportsPageComponent,
      children: []
    }
  ];


@NgModule ({
    imports: [RouterModule.forChild(routes)],
})

export class ReportsPageRoutingModule {}