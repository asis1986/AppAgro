
// Módulos necesarios para la creación del nuevo componente

import {Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'signup',
  templateUrl:'./signup.component.html',
  providers:[ UserService ]
  
})
// Componente de angular para manipular los nuevos regístros 
export class SignupComponent implements OnInit{
public title: string;
public descripcion: string;
public user:User;
public status:string;
// constructor del módulo que inicializa las variables..
constructor(
  private _route: ActivatedRoute,
  private _router: Router,
  private _userService: UserService
){
  //asignación de valores a varibles 
  this.title = 'Regístrate Aquí';
  this.user = new User("","","","","","User","","");

 
}
// envía un mensaje en consola que confirma que el componente fué cargado correctamente
ngOnInit(){
  console.log('COMPONENTE CARGADO');

}
// función que se ejecutará al momento de presionar el botón registrate
onSubmit(form){
 this._userService.signup(this.user).subscribe(
    response =>{
      if(response.user && response.user._id){
     
        //variable que se utilizará para enviar un mensaje de confirmación o de error dependiendo el valor que esta tome
       this.status = 'success';
       // Limpiar los campos del formulario cuando esté sea válido
        form.reset();
      }else{
        this.status = 'error';
      }
    },
// error que pueda ocurrir al momento de procesar los datos
    error => {

      console.log(<any>error);

    }
 );
}

}