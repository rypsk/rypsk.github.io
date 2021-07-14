import { Component, OnInit } from '@angular/core';
import { Indicator } from 'src/app/models/indicator';
import { REData } from 'src/app/models/redata';
import { Value } from 'src/app/models/value';
import { MessageService } from 'src/app/services/message/message.service';
import { RedataService } from '../../services/redata.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-redata-home',
  templateUrl: './redata-home.component.html',
  styleUrls: ['./redata-home.component.scss']
})
export class RedataHomeComponent implements OnInit {

  data: Value[] = [];
  prices: number[] = [];
  hours: Date[] = [];
  maxDate: Date;
  requestDate: Date;
  chartOptions: any;
  chartData: any;
  minPrice: any;
  maxPrice: any;


  constructor(private redataService: RedataService, private messageService: MessageService) {
    this.requestDate = new Date;
    this.maxDate = new Date;
    let hours = this.maxDate.getHours();
    let minutes = this.maxDate.getMinutes();
    console.log('Server time: '+hours+':'+minutes);
    
    // if (hours >= 20 && minutes >= 30) {
      this.maxDate = new Date(this.requestDate.getTime() + (1000 * 60 * 60 * 24));
    // } else {
      // this.maxDate = new Date();
    // }
  }

  ngOnInit(): void {
    this.getData();
    this.applyLightTheme();
    
  }

  getData() {
    this.redataService.getData(this.requestDate).subscribe((redata: REData) => {
      this.data = redata.indicator.values;
      this.data.forEach(value => {
        let price = value.value / 1000;
        this.prices.push(Math.round(price * 100000) / 100000);  
        this.hours.push(value.datetime);
      });
      this.fillChart();
      this.maxPrice = Math.max(...this.prices);
      this.minPrice = Math.min(...this.prices);
    });
  }

  fillChart(){
    console.log(this.prices);
    console.log(this.hours);
    this.chartData = {
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      datasets: [
        {
          label: 'Price',
          data: [this.prices[0],this.prices[1],this.prices[2],this.prices[3],this.prices[4],this.prices[5],this.prices[6],this.prices[7],this.prices[8],this.prices[9],this.prices[10],this.prices[11],this.prices[12],this.prices[13],this.prices[14],this.prices[15],this.prices[16],this.prices[17],this.prices[18],this.prices[19],this.prices[20],this.prices[21],this.prices[22],this.prices[23]],          
          fill: false,
          borderColor: '#42A5F5'
        }
      ]
    }    
  }

  applyLightTheme() {
    this.chartOptions = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      }
    };
  }

}
