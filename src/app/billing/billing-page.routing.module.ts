import { NgModule } from "@angular/core";
import { BillingPageComponent } from "./billing-page.component";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: BillingPageComponent,
      children: []
    }
  ];


@NgModule ({
    imports: [RouterModule.forChild(routes)],
})

export class BillingPageRoutingModule {}