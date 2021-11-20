import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }
  history
  ngOnInit() {
    this.history = JSON.parse(localStorage.getItem('history'));
  }

  deleteHistory(event) {
    console.log(event.target.value)
    var objIndex = this.history.findIndex((obj => obj == event.target.value));
    this.history = this.history.splice(objIndex, 1);
    localStorage.setItem("history", JSON.stringify(this.history))


  }
}
