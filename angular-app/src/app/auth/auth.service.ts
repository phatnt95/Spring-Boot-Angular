import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';

// @Injectable()
export class AuthService {
    public token: string = 'undefined';

    constructor(public jwtHelper: JwtHelperService, private httpClient: HttpClient) { }

    public isAuthenticated(): boolean {
        this.token = JSON.parse(localStorage.getItem('token') || '{}');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(this.token);
    }

    authenticate(username: string, password: string) {
        return this.httpClient
            .post<any>("http://localhost:8080/api/authenticate", { username, password })
            .pipe(
                map(userData => {
                    sessionStorage.setItem("username", username);
                    let tokenStr = "Bearer " + userData.token;
                    sessionStorage.setItem("token", tokenStr);
                    return userData;
                })
            );
    }

    logOut() {
        sessionStorage.removeItem("username");
    }
}
