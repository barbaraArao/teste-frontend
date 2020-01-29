import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';


import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const api = environment.api;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoginSubject = new EventEmitter<boolean>(this.hasToken());

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string) {

    return this.http.post<any>(`${api}Token`, { login, password })
      .pipe(map(login => {
        console.log(login)
        if (login && login.data.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(login));
          this.isLoginSubject.emit(true);

          this.currentUserSubject.next(login);
        }

        return login;
      }));
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
  private hasToken(): boolean {
    return localStorage.getItem('currentUser') ? true : false;
  }
  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.isLoginSubject.emit(false);


  }
}
