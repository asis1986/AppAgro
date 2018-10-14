import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'mydata',
  templateUrl:'./mydata.component.html'
})


export class MydataComponent implements OnInit{
  public title:string;
  constructor(){
    this.title='Actualizar datos '
  }


  ngOnInit(): void {
    console.log('Componente de mydata cargado')
    
  }

}