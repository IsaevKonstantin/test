import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'app/services/header.service';

@Component({
    selector: 'app-app-page',
    templateUrl: './app-page.component.html',
    styleUrls: ['./app-page.component.less'],
})
export class AppPageComponent implements OnInit {
    public myForm: FormGroup;

    constructor(
        private _router: Router,
        private _headerService: HeaderService
    ) {
        this.myForm = new FormGroup({
            userName: new FormControl('', [
                Validators.required,
                Validators.maxLength(255),
            ]),
            userEmail: new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            userPhone: new FormControl('+7', [
                Validators.required,
                Validators.maxLength(12),
                Validators.minLength(12),
            ]),
        });
    }

    ngOnInit(): void {
        this._headerService.title$.next('Sign up');
    }

    public navigateToLogIn(): void {
        this._router.navigate(['/auth']);
    }
}
