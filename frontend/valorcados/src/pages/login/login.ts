import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: String;
  clave: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if (window.localStorage['token'] != null) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  hacerLogin() {
    var data = { 'username': this.usuario, 'password': this.clave };
    this.restProvider.login(data)
      .then((data: any) => {
        window.localStorage['token'] = data.key; // Guardar en el localStorage el token del usuario
        // this.navCtrl.push(HomePage); // Redireccionar a otra página
        this.navCtrl.setRoot(HomePage);
        // console.log(data);
      });
  }

  mostrarRegistro() {
    this.navCtrl.push(RegistroPage);
  }
}
