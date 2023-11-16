import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderService } from '../services/header.service';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private _headerService: HeaderService,
        private _router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this._headerService.user$.getValue()) {
            this._router.navigate(['/auth']);
        }
        return !!this._headerService.user$.getValue();
    }
}
