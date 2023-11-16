import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('app/auth-page/auth-page.module').then(
                (m) => m.AuthPageModule
            ),
    },
    {
        path: 'app',
        loadChildren: () =>
            import('app/app-page/app-page.module').then((m) => m.AppPageModule),
    },
    {
        path: 'home',
        loadChildren: () =>
            import('app/home/home-page.module').then((m) => m.HomePageModule),
        canActivate: [AuthenticationGuard],
    },
    {
        path: 'inventory',
        loadChildren: () =>
            import('app/inventory/inventory-page.module').then(
                (m) => m.InventoryPageModule
            ),
        canActivate: [AuthenticationGuard],
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('app/reports/reports-page.module').then(
                (m) => m.ReportsPageModule
            ),
        canActivate: [AuthenticationGuard],
    },
    {
        path: 'billing',
        loadChildren: () =>
            import('app/billing/billing-page.module').then(
                (m) => m.BillingPageModule
            ),
        canActivate: [AuthenticationGuard],
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('app/profile/profile-page.module').then(
                (m) => m.ProfilePageModule
            ),
        canActivate: [AuthenticationGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
