import { Component } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  public title: string;
  public text_description:string;
  public sesion:string;
  constructor() { 
    this.title = 'AgroSoft';
    this.text_description = 'Bienvenido señor usuario, puede iniciar sesión llenando los campos';
    this.sesion ='Inicia Sesión'
  }

  ngOnInit() { 
    console.log('Componente signin cargado');
  }

}