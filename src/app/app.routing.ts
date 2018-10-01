import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutComponent} from './core/components/about/about.component';
import {HomeComponent} from './core/components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', loadChildren: 'app/order/order.module#OrderModule'},
  {path: 'user/:id', loadChildren: 'app/user/user.module#UserModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


