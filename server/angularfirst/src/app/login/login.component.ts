import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm:any
public status = false;
public response = false
  constructor( public fb:FormBuilder, public auth :AuthService, public router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email:[],
      password:[]
    })
  }
  signIn(){
    let form = this.loginForm.value;
    this.auth.signIn(form).subscribe((data: any) =>{
      this.response = true;
      if(data.success){
        this.status = true
        let token = data.token;
        localStorage.setItem("token",token)
        localStorage.setItem('userData', JSON.stringify(data.data))
        this.router.navigate(['/dashboard'])
      }
    }, (err)=>{
      if(err.status == 401){
        this.response = true;
        this.status = false;

      }
    })
  }
}
