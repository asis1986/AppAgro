
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomePageComponent } from './component/homepage/homepage.component';


// tslint:disable-next-line:whitespace
const appRoutes: Routes =[
  // tslint:disable-next-line:whitespace
  {path: '',component: HomePageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: '**', component: SigninComponent },
// tslint:disable-next-line:semicolon
]
// tslint:disable-next-line:whitespace
export const appRoutingProviders: any[] =[];
// tslint:disable-next-line:eofline
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);