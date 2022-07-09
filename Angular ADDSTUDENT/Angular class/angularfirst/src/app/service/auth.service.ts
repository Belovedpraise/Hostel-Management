import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public baseUrl = environment.baseUrl;

  constructor(public http:HttpClient, public router:Router) { }

  signUp(data:any){
    return this.http.post(`${this.baseUrl}/user/signUp`, data)
  }

  signIn(data: any){
    return this.http.post(`${this.baseUrl}/user/signIn`,data)
  }
  getProfile(){
    return this.http.get(`${this.baseUrl}/user/api/getProfile`)
  }

  signOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    // return this.http.get(`${this.baseUrl}/user/signOut`)
  }
}
