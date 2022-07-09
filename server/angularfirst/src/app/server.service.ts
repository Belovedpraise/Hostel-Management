import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServerService {
//  public baseUrl = environment.baseUrl
public baseUrl = environment.baseUrl;
  constructor(public http:HttpClient) { }


  test(){
    return this.http.get(`${this.baseUrl}/path`)
  }
}
