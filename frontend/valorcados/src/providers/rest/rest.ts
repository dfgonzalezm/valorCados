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
  apiCategorias = 'categorias/';
  apiUsuarios = 'usuarios/';


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
        // Si hay errores se ejecutará err
      }, (err) => {
        reject(err);
      });
    });
  }
  
  registro(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiUsuarios, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCategorias() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiCategorias, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
