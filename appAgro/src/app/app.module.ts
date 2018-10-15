import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Importamos los componentes que deseamos cargar en la aplicación
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import {SigninComponent} from './component/signin/signin.component';
import { HomePageComponent } from './component/homepage/homepage.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { MydataComponent } from './component/mydata/mydata.component';
import { UserAdminComponent} from './component/useradmin/useradmin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//componentes de Materialize css
import { MzNavbarModule } from 'ngx-materialize';
import { ReactiveFormsModule } from '@angular/forms';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule } from 'ngx-materialize';
import { MzDropdownModule } from 'ngx-materialize';


// importamos el sistema de rutas para poderlos utilizar en la aplicación
import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomePageComponent,
    StatisticsComponent,
    MydataComponent,
    UserAdminComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MzButtonModule,
    MzNavbarModule,
    MzDropdownModule,
    ReactiveFormsModule,
    MzCollapsibleModule ,
    MzIconModule,
    MzIconMdiModule,
    NoopAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
