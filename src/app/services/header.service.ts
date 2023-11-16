import { Injectable } from '@angular/core';
import { IUser } from 'app/interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
    public title$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public user$: BehaviorSubject<IUser | null> =
        new BehaviorSubject<IUser | null>(null);
    public message$: BehaviorSubject<'success' | 'error' | null> =
        new BehaviorSubject<'success' | 'error' | null>(null);
}
