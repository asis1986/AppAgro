
//importamos los módulos necesarios para crear un servicio
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { GLOBAL } from './global';


@Injectable()

export class UserService{
  public url:string;
  public identity;
  public urlweahter;

  constructor(public _http: HttpClient){
    this.url = GLOBAL.url
    this.urlweahter = GLOBAL.urlweahter;
  }

  // método para enviar peticiones  ajax, en este caso se envian
  // los datos  a la Api para el regístro de un nuevo usuario

  signup(user: User): Observable <any> {
    //convierte los datos enviados en un objeto JSON  para ser procesados de manera mas facil
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //envia los datos del usuario a la api para que sean procesados 
    return this._http.post(this.url+'register', params,{ headers:headers});
  }
   
  // método para hacer login de un usuario

  signin(user: User): Observable <any> {
   
    let params =JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'signin', params, { headers: headers });

}

getIdentity(){
  let identity = JSON.parse(localStorage.getItem('identity'));

  if(identity != undefined){
    this.identity = identity;
  }else{
    this.identity = null;
  }

  return this.identity;
}


//método para mostrar estadísticas con una api de prueba
  dailyForcast(): Observable<any> {
 return this._http.get(this.urlweahter);

  }



}