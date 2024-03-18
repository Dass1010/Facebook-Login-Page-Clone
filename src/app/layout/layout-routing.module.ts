import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    loadChildren: () =>
      import('../modules/facebook-login-page.module').then(
        (m) => m.FacebookLoginPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
