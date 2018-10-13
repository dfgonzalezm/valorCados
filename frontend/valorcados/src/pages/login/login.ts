import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';

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
<<<<<<< HEAD

  usuario: String;
  clave: String;
=======
  Usuario: String;
  Clave: String;
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
<<<<<<< HEAD
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

}
=======
  }
  hacerLogin() {
    var data = { 'username': this.Usuario, 'password': this.Clave };
    this.restProvider.login(data)
      .then((data: any) => {
      window.localStorage['token'] = data.key;
      this.navCtrl.setRoot(HomePage);
    });
  }

}
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3
