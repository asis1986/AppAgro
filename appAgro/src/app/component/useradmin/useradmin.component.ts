import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admnin',
  templateUrl: './useradmin.component.html'
})

export class UserAdminComponent implements OnInit{
  public title:string;

  constructor(){
    this.title = 'Administrador'
  }

  ngOnInit(): void {
   console.log('Component cargado')
    
  }
}