import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importamos los componentes que deseamos cargar en la aplicación
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';



//importamos el sistema de rutas para poderlos utilizar en la aplicación
import { routing, appRoutingProviders } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
   
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
