import { NgModule } from "@angular/core";
import { InventoryPageComponent } from "./inventory-page.component";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: InventoryPageComponent,
      children: []
    }
  ];


@NgModule ({
    imports: [RouterModule.forChild(routes)],
})

export class InventoryPageRoutingModule {}