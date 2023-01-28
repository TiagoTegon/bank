import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/pages/account/account.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListComponent } from './components/pages/list/list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'list', component:ListComponent},
  {path:'list/search/:searchTerm', component:ListComponent},
  {path:'registration/:code', component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
