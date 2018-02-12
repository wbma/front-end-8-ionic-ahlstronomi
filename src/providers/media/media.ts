import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NavController} from "ionic-angular";
import {FrontPage} from "../../pages/front/front";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  test = 'test works';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  username: string;
  password: string;
  email: string;
  fullName: string;

  constructor(public http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media?limit=9999');
  }

  public login() {
    let data: any;
    console.log('uname: ' + this.username);
    console.log('pwd: ' + this.password);

    const body = {
      username: this.username,
      password: this.password,
    };

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    data = this.http.post(this.apiUrl + '/login', body, settings);
    console.log(data);
    return data;
  }

  public register() {

    const body = {
      username: this.username,
      password: this.password,
      full_name: this.fullName,
      email: this.email
    };

    this.http.post(this.apiUrl + '/users', body).subscribe(data => {
      console.log(data);
      this.login();
    });
  }

}
