import { Component, OnInit } from '@angular/core';
import { Indicator } from 'src/app/models/indicator';
import { REData } from 'src/app/models/redata';
import { Value } from 'src/app/models/value';
import { MessageService } from 'src/app/services/message/message.service';
import { RedataService } from '../../services/redata.service';


@Component({
  selector: 'app-redata-home',
  templateUrl: './redata-home.component.html',
  styleUrls: ['./redata-home.component.scss']
})
export class RedataHomeComponent implements OnInit {

  data: Value[] = [];
  maxDate: Date;
  requestDate: Date;
  chartOptions: any;
  chartData: any;


  constructor(private redataService: RedataService, private messageService: MessageService) {
    this.requestDate = new Date;
    this.maxDate = new Date;
    let hours = this.maxDate.getHours();
    let minutes = this.maxDate.getMinutes();

    if (hours >= 20 && minutes >= 30) {
      this.maxDate = new Date(this.requestDate.getTime() + (1000 * 60 * 60 * 24));
    } else {
      this.maxDate = new Date();
    }
  }

  ngOnInit(): void {


    this.applyLightTheme();
    this.chartData = {
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      datasets: [
        {
          label: 'First Dataset',
          data: [this.data],
          fill: false,
          borderColor: '#42A5F5'
        }
      ]
    }
  }

  getData() {
    this.redataService.getData(this.requestDate).subscribe((redata: REData) => {
      this.data = redata.indicator.values;
    })
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
