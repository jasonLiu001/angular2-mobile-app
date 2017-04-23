import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [
    {
      name: "小刘",
      age: "32"
    },
    {
      name: "小蔡",
      age: "28"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
