import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7243/api/Auth'; // ton backend

  constructor(private http: HttpClient) {}

  testApi() {
    return this.http.get(`${this.apiUrl}/test`);
  }
  login(email:string, password:string){
  return this.http.post(`${this.apiUrl}/login`, {
    email,
    password
  });
}
}