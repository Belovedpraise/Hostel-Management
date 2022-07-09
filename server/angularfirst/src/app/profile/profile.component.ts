import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   public prof :any;
  constructor(public router:Router) { }

  ngOnInit(): void {
    let store :any = localStorage.getItem('userData')
    let parseData :any = JSON.parse(store)
    this.prof = parseData;
  }

}
