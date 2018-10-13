import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // Esta función se ejecuta al pulsar el botón 
  login(data) {
    // El objeto Promise funciona de manera similar al try catch
    return new Promise((resolve, reject) => {
      // Http es un objeto de la clase HttpClient que sirve para hacer peticiones AJAX
      this.http.post(this.apiUrl + this.loginService, data)
        // Si no hay errores se ejecuta la función subscribe
        .subscribe(res => {
          resolve(res);
        // Si hay errores se ejecutar err
        }, (err) => {
          reject(err);
        });
    });
  }
}
