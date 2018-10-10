import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signin',
  templateUrl: './signin.component.html',
  providers:[UserService]
})
export class SigninComponent {
  public title: string;
  public text_description: string;
  public sesion: string;
  public user: User;
  public status:string;
  public identity;
  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {
    this.title = 'Ingresa Aquí';
    this.text_description = 'Bienvenido señor usuario, puede iniciar sesión llenando los campos';
    this.sesion = 'Inicia Sesión';
    this.user = new User (null , '' , '' , '' , '' , '' , '' , '');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log('Componente signin cargado');
  }

  onSubmit(form){
   // Loguear a un usuario
    this._userService.signin(this.user).subscribe(
      response =>{
        this.identity = response.user;
        if(!this.identity || !this.identity._id){
          this.status = 'Error';
         
        }else{
          this.status = 'success';
          // Persistir datos
         localStorage.setItem('identity', JSON.stringify(this.identity))
        }
        console.log(this.identity);
        form.reset();
      },

      error =>{
        let errorMessage = <any>error;
        if(errorMessage !=null){
          this.status = 'error';
        }
        console.log(errorMessage);
      }
    );
  
  }
}
