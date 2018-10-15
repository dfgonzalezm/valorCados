import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuario: String;
  nombre: String;
  apellido: String;
  fecha_de_nacimiento: Date;
  clave: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  iniciarRegistro() {
    var data = {
      'username': this.usuario,
      'password': this.clave,
      'nombres': this.nombre,
      'apellidos': this.apellido,
      'clave': this.clave,
      'fecha_nacimiento': this.fecha_de_nacimiento
    };
    this.restProvider.registro(data).then((result: any) => {
      this.navCtrl.setRoot(LoginPage);
    }, (err) => {
      console.log(err);
    });
  }
}
