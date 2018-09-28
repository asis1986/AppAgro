//importamos las librerias necesarias para realizar el sistema de rutas de la aplicación

import {RouterModule,Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

// importamos los componentes a los cuales deseamos crearles una ruta
import { SignupComponent } from './component/signup/signup.component';
import {SigninComponent} from './component/signin/signin.component';



// creación del sistema de rutas

const appRoutes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
  {path: '**', component: SignupComponent}
];


//exportamos las en forma de constantes el array de objetos creado anteriormente
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);