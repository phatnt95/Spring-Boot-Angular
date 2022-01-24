import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export class Foo {
    constructor(public id: number, public name: string) { }
}

@Injectable()
export class AppService {
    public clientId = 'newClient';
    public redirectUri = 'http://localhost:8089/';

    constructor(private _http: HttpClient) { }

    
}