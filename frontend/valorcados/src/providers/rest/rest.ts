import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:8000/';
  loginService = 'api/login/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  hacerLogin() {
    var data = { 'username': this.Usuario, 'password': this.Clave };
    this.restProvider.login(data)
      .then(data => {
        console.log(data);
      });
  }
}
