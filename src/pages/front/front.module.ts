import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { FrontPage } from './front';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    FrontPage,
  ],
  imports: [
    IonicPageModule.forChild(FrontPage),
    HttpClientModule
  ],
})
export class FrontPageModule {}
