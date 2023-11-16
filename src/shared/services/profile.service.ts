import { Injectable } from '@angular/core';
import { of } from 'rxjs';

Injectable()
export class ProfileService {
    public get profile$() { return of({}); }
}
