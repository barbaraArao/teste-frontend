import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getProfiles() {
		return this.http.get<any>(`${api}List?limit=30`);
  }
  registerProfile(dataUser) {
		return this.http.post<any>(`${api}Register`, dataUser);
	}
}
