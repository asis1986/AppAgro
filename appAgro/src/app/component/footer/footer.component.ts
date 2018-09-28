
//Importar librerias necesarias para la creación de componentes
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer-site',
  templateUrl:'./footer.component.html'
})

export class FooterComponent implements OnInit{

  public title:string;

  constructor(){
    this.title = 'copyright-2018 SoftAgro';
  }

  ngOnInit(){
    console.log('COmponente Cargado ');
  }
}