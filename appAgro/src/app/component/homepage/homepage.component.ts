import { Component} from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html'
})
export class HomePageComponent  {
  public title:string;

  constructor() { 
    this.title = 'Agrosoft';
  }

  ngOnInit() { 
    console.log('componente de la homepage cargado');
  }

}