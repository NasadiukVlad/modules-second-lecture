import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutComponent} from './core/components/about/about.component';
import {HomeComponent} from './core/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
  {path: 'user/:id', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}



