import { Component, OnInit } from '@angular/core';
import { REData } from 'src/app/models/redata';
import { Value } from 'src/app/models/value';
import { MessageService } from 'src/app/services/message/message.service';
import { RedataService } from '../../services/redata.service';
import { MenuItem } from 'primeng/api/menuitem';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-redata-home',
  templateUrl: './redata-home.component.html',
  styleUrls: ['./redata-home.component.scss']
})
export class RedataHomeComponent implements OnInit {

  data: Value[] = [];
  prices: number[] = [];
  pricesAux: number[] = [];
  maxDate: Date;
  requestDate: Date;
  chartOptions: any;
  chartData: any;
  minPrice: any;
  maxPrice: any;
  minPriceHour!: any;
  maxPriceHour!: any;
  breadcrumbItems!: MenuItem[];
  home!: MenuItem;
  colorMap: Map<number,string> = new Map();


  constructor(private redataService: RedataService, private messageService: MessageService, private activatedRoute: ActivatedRoute) {
    this.requestDate = new Date;
    this.maxDate = new Date;
    let hours = this.maxDate.getHours();
    let minutes = this.maxDate.getMinutes();
    console.log('Server time: ' + hours + ':' + minutes);

    this.maxDate = new Date(this.requestDate.getTime() + (1000 * 60 * 60 * 24));
    
    this.activatedRoute.data.subscribe(data => {
      this.breadcrumbItems = [{ label: data.breadcrumbItems }];
    });
  }

  ngOnInit(): void {
    this.getData();
    this.applyLightTheme();
    this.home = { icon: 'pi pi-home', routerLink: '/home' };
    this.colorMap.set(1,'00FF06');
    this.colorMap.set(2,'30EB00');
    this.colorMap.set(3,'6EFF01');
    this.colorMap.set(4,'9CEB00');
    this.colorMap.set(5,'E4FF00');
    this.colorMap.set(6,'EBE200');
    this.colorMap.set(7,'FFE500');
    this.colorMap.set(8,'EBC400');
    this.colorMap.set(9,'FFC500');
    this.colorMap.set(10,'EBAA00');
    this.colorMap.set(11,'FFAE00');
    this.colorMap.set(12,'EB9700');
    this.colorMap.set(13,'FF9900');
    this.colorMap.set(14,'EB8200');
    this.colorMap.set(15,'FF8000');
    this.colorMap.set(16,'EB6900');
    this.colorMap.set(17,'FF6400');
    this.colorMap.set(18,'EB4F00');
    this.colorMap.set(19,'FF4701');
    this.colorMap.set(20,'EB3600');
    this.colorMap.set(21,'FF2D00');
    this.colorMap.set(22,'EB1D00');
    this.colorMap.set(23,'FF1100');
    this.colorMap.set(24,'EB0200');
  }

  reset(){
    this.data = [];
    this.prices = [];
    this.pricesAux = [];
  }

  getData() {
    this.reset();
    console.log(this.requestDate);
    this.redataService.getData(this.requestDate).subscribe((redata: REData) => {
      this.data = redata.indicator.values;
      
      this.data.forEach(value => {
        let price = value.value / 1000;
        value.color = 'red';
        this.prices.push(Math.round(price * 100000) / 100000);
        this.pricesAux.push(Math.round(price * 100000) / 100000);
      });
      let pricesSorted = [];
      pricesSorted = this.pricesAux.sort(function (a, b) { return a - b });
      let pricesMap = new Map();
      let i: number = 1;
      pricesSorted.forEach(value => {
        pricesMap.set(value, i)
        i++;
      })

      this.data.forEach(value => {
        let price = value.value / 1000;
        value.position = pricesMap.get((Math.round(price * 100000) / 100000));
        value.color = this.colorMap.get(value.position)!; 
        if(value.position == 1){this.minPriceHour = value.datetime;}
        if(value.position == 24){this.maxPriceHour = value.datetime;}
      })
      this.fillChart();
      this.maxPrice = Math.max(...this.prices);
      this.minPrice = Math.min(...this.prices);
    });
  }

  getClassColor(element: Value): string {
    let currentHour = new Date().getHours();
    let elementHour = new Date(element.datetime).getHours();
    let isNow = currentHour == elementHour;
    let bold = isNow ? " bold" : "";
    return 'color-'+element.position + bold;
  }

  fillChart() {
    this.chartData = {
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      datasets: [
        {
          label: 'Precio',
          data: this.prices,
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
