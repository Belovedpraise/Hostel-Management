import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import {catchError} from 'rxjs/Operators';
import { throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor {

  constructor(public auth:AuthService) { }

intercept(req:HttpRequest<any>, next:HttpHandler){
let token = localStorage.getItem('token')
req = req.clone({headers:req.headers.set('Authorization','Bearer'+token)});
req = req.clone({headers:req.headers.set('Content-Type','application/json')});
req = req.clone({headers:req.headers.set('Accept','application/json')});

return next.handle(req)
.pipe(catchError((err:HttpErrorResponse)=>{
if(err&&err.status == 401){
  this.auth.signOut();
}
  return throwError(err);
}))

  }
}
