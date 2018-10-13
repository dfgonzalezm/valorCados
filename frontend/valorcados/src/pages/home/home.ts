import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
<<<<<<< HEAD

  cerrarSesion() {
    window.localStorage.clear();
    this.navCtrl.push(LoginPage);
  }

=======
  cerrarSesion() {
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3
}
