import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _server:ServerService, public fb:FormBuilder,public auth:AuthService,  public router:Router) { }
// public userForm:any;
// public status = false
// public response = true
// public message = ""
  ngOnInit(): void {
    // this.userForm =this.fb.group({
    //   lastname:[""],
    //   firstname:[""],
    //   username:[""],
    //   email:[""],
    //   password:[""],
    // })
  }

  // testApi(){
  //   this._server.test().subscribe(data =>{
  //     console.log(data);

  //   })
  
  // signUp(){
  //   let form = this.userForm.value;
  //   this.auth.signUp(form).subscribe((data:any)=>{
  //     console.log(data);
  //     if(data.success){
  //       this.status = true;
  //       this.message = data.message;
  //       setTimeout(()=>{
  //         this.router.navigate(['/login'])
  //       }, 4000);

  //     }else{
  //       this.message = data.message;
  //       this.status = false;
  //     }
  //   },(err)=>{
  //     console.log(err);
  //     this.message = "signing up failed";
  //     this.status = false;
  // })
// }

}
