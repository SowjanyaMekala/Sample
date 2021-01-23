import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppService  {
    url: string = "https://localhost:4436/api/";

    private httpOptions: any;
    constructor(public httpClient: HttpClient) {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }) };
    }

    Register(user): Observable<any> {
        return this.post(`${this.url}/Register`, user)
            .pipe(map(data => data));
    }
    forgotPasswordlink(email: string): Observable<any> {
        return this.post(`${this.url}/forgotPasswordlink?email=${email}`)
            .pipe(map(data => data));
    }
    post(path: string, body: Object = {}): Observable<any> {
        return this.httpClient.post(`${path}`, JSON.stringify(body), this.httpOptions)
            .pipe(catchError());
    }
}



