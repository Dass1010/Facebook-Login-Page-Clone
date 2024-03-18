import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookLoginPageComponent } from './facebook-login-page/facebook-login-page.component';

const routes: Routes = [
  {
    path: '',
    component: FacebookLoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookLoginPageRoutingModule {}
