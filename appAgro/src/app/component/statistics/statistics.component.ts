
//importamos los Módulos necesarios para crear un componente
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  providers: [UserService]
})

//Exportamos la clase para que pueda ser utilizada en otros componentes

export class StatisticsComponent implements OnInit {


  public title: string;
  public chart: any;

  constructor(private _weahter: UserService) {
    this.title = 'Estadísticas';
    this.chart = [];
  }

  ngOnInit(): void {

    this._weahter.dailyForcast().subscribe((res) => {
      let tem_max = res['list'].map(res => res.temp.max);
      let tem_min = res['list'].map(res => res.temp.min);
      let AllDays = res['list'].map(res => res.dt);

      console.log(tem_max)
      let weahtherDay = [];
      AllDays.forEach(result => {
        let jsDate = new Date(result * 1000)
        let options = {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        };
        weahtherDay.push(jsDate.toLocaleTimeString('es', options))

        this.chart = new Chart('canvas', {

          type: 'line',
          data: {
            labels: weahtherDay,
            datasets: [
              {
              label: 'Temp-max',
              data: tem_max,
              backgroundColor: 'red', 
              borderColor: 'black',
              borderWidth: 1,
              fill: false
            
            },
              {
                label: 'Temp-min',
                data: tem_min,
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
                fill: false

              },
          ]
          },
          options: {
            legends:{
              display:false
            },
            scales: {
              xAxes: [{
                display:true
              }],
              yAxes: [{
                display:true
              }]
            }
          }

        })
        });
      });
      console.log('Componente Statistcs cargado')
    }

}

