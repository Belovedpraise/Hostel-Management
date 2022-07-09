import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth:AuthService) { }
  public user:any;
  public userData :any
  ngOnInit(): void {
  //   let store :any = localStorage.getItem('userData')

  //  let parseData :any = JSON.parse(store)
  //   this.user = parseData;

    this.auth.getProfile().subscribe((data:any) =>{
   this.user =data;
   this.user =`${this.userData.firstname} ${this.userData.lastname}`
   this.auth=this.userData(data)
      // this.user =`${data.lastname}${data.firstname}`
    })
  }

}
