import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl;

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient,
    public matSnackBar: MatSnackBar
    ) {}

  // return what comes back from this http call
  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action ? action : undefined, {
      verticalPosition: "top",
      horizontalPosition: "end",
    });
  }
}
