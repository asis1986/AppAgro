
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomePageComponent } from './component/homepage/homepage.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { MydataComponent } from './component/mydata/mydata.component';
import { UserAdminComponent } from './component/useradmin/useradmin.component';


// tslint:disable-next-line:whitespace
const appRoutes: Routes =[
  // tslint:disable-next-line:whitespace
  {path: '',component: HomePageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'admin', component:UserAdminComponent },

  { path: 'mydata', component: MydataComponent },

  { path: '**', component: HomePageComponent },
// tslint:disable-next-line:semicolon
]
// tslint:disable-next-line:whitespace
export const appRoutingProviders: any[] =[];
// tslint:disable-next-line:eofline
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);