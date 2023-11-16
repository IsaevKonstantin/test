import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'app/services/header.service';
import { UserApiService } from 'app/services/user-api.service';
import { map, switchMap } from 'rxjs';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.less'],
})
export class AuthPageComponent implements OnInit {
    public myForm: FormGroup;

    constructor(
        private _userService: UserApiService,
        private _router: Router,
        private _headerService: HeaderService
    ) {
        this.myForm = new FormGroup({
            userLogin: new FormControl('', Validators.required),
            userPassword: new FormControl('', Validators.required),
        });
    }

    ngOnInit(): void {
        this._headerService.title$.next('Log in');
    }

    public navigateToSignUp() {
        this._router.navigate(['/app']);
    }

    public navigateToHome(): void {
        const login = this.myForm.controls['userLogin'].value;
        const password = this.myForm.controls['userPassword'].value;
        try {
            this._userService
                .login({
                    login: login,
                    password: password,
                })
                .pipe(
                    map((m) => m.authData),
                    switchMap((value) => {
                        return this._userService.getUsers(value.login);
                    })
                )
                .subscribe(
                    (user) => {
                        this._headerService.user$.next(user.userData);
                        localStorage.setItem(
                            'userData',
                            JSON.stringify(user.userData)
                        );
                        this._headerService.message$.next('success');
                        this._headerService.title$.next('Home');
                        this._router.navigate(['/home']);
                    },
                    (error) => {
                        this._headerService.message$.next('error');
                    }
                );
        } catch {}
    }
}
