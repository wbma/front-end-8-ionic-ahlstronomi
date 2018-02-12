import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {LoginPage} from "../login/login";

/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class FrontPage {

  printThis: string;
  mediaArray: any;

  constructor(public navCtrlr: NavController, public mediaProvider: MediaProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if (localStorage.getItem('token') == null) {
      this.navCtrlr.setRoot(LoginPage);
    }

    this.printThis = this.mediaProvider.test;
    this.mediaProvider.getAllMedia().subscribe(
      data => {
        console.log(data);
        this.mediaArray = data;

        /*  Option 1:
        this.mediaArray.forEach((media, index) => {
          const temp = media.filename.split('.');
          const thumbName = (temp[0] + '-tn320.png');
          this.mediaArray[index].thumbnail = thumbName;
        }); */
      }
    );
  }

  // Option 2 if you need this function elsewhere
  thumbnailer(filename: String) {
    const splitFilename = filename.split('.');
    const thumbnailUrl = splitFilename[0] + '-tn320.png';
    return thumbnailUrl;
  }
}
