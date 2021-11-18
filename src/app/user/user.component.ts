import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: UserService) { }
  user;
  ngOnInit() {
    this.http.getUsers().subscribe((data) => {
      this.user = data;
    })
  }



}
