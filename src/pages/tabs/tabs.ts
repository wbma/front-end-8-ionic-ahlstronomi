import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FrontPage } from "../front/front";
import { ProfilePage} from "../profile/profile";
import {UploadPage} from "../upload/upload";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FrontPage;
  tab2Root = UploadPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
