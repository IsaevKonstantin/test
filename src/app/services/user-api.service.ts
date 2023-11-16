import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer, IAuth, IUser } from 'app/interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    constructor(private _http: HttpClient) {}
    public getUsers(login: string): Observable<{ userData: IUser }> {
        return this._http.get<{ userData: IUser }>(
            `assets/data/user-data-${login}.json`
        );
    }
    public addUser(user: IUser): Observable<IUser> {
        return this._http.post<IUser>('', user);
    }
    public changeUser(user: IUser): Observable<IUser> {
        return this._http.put<IUser>('', user);
    }
    public login(user: IAuth): Observable<{ authData: Answer }> {
        return this._http.get<{ authData: Answer }>(
            `assets/data/auth-data-${user.login}.json`
        );
    }
}
