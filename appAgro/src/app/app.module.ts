import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importamos los componentes que deseamos cargar en la aplicación
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import {SigninComponent}  from './component/signin/signin.component';


//importamos el sistema de rutas para poderlos utilizar en la aplicación
import { routing, appRoutingProviders } from './app.routing';
import { HomePageComponent } from './component/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomePageComponent
 
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
