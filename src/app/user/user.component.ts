import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: UserService) { }
  users;
  searchInput;
  searchUserFound = false;
  searchUserNot = true;
  history = [];
  historyGet;
  ngOnInit() {
    this.http.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    })
  }

  onSearch(event) {

    console.log(this.searchInput);
    this.history.push(this.searchInput);
    localStorage.setItem("history", JSON.stringify(this.history))
    const filterUsers = [];
    this.users.map((x: any) => {
      if (x.login === this.searchInput) {
        this.searchUserFound = true;
        this.searchUserNot = false;
        filterUsers.push(x)
      }
    })
    if (filterUsers.length === 0) {
      this.searchUserNot = false;
      this.searchUserFound = true;
      this.http.openSnackBar(
        "Entered user login not match with Github user",
        "Close"
      );
    }
    this.users = filterUsers;
    console.log(event.target)
  }

  onChange(event) {
    this.searchInput = event.target.value
    console.log(event.target.value)
  }

  historyShow() {
   this.historyGet = JSON.parse(localStorage.getItem("hitory"))

  }

}
