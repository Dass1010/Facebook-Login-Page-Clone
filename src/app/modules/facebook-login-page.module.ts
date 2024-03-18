import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookLoginPageRoutingModule } from './facebook-login-page-routing.module';
import { FacebookLoginPageComponent } from './facebook-login-page/facebook-login-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [FacebookLoginPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FacebookLoginPageRoutingModule
  ]
})
export class FacebookLoginPageModule { }
