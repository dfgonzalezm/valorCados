import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CategoriasPage } from '../categorias/categorias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  cerrarSesion() {
    window.localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  categorias() {
    this.navCtrl.push(CategoriasPage);
  }

}
