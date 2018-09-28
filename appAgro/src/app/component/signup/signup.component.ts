import {Component, OnInit } from '@angular/core';


@Component({
  selector: 'signup',
  templateUrl:'./signup.component.html'
  
})

export class SignupComponent implements OnInit{
public title: string;

constructor(){
  this.title = 'AgroSoft'
}

ngOnInit(){
  console.log('COMPONENTE CARGADO');
}


}