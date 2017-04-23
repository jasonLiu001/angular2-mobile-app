import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  users: any[] = [
    {
      name: "小刘",
      age: "32"
    },
    {
      name: "小蔡",
      age: "28"
    },
    {
      name: "小王",
      age: "32"
    },
    {
      name: "小李",
      age: "28"
    },
    {
      name: "小张",
      age: "32"
    },
    {
      name: "小白",
      age: "28"
    },
    {
      name: "小马",
      age: "28"
    }
  ];

  /**
   *
   * @summary 提示
   * */
  showAlert(message:string): void {
    let alert = this.alertCtrl.create({
      title: "提示",
      message: message,
      buttons: ["ok"]
    });
    alert.present();
  }

}
