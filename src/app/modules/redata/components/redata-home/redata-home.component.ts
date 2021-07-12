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
  }

  getData() {
    this.redataService.getData(this.requestDate).subscribe((redata: REData) => {
      this.data = redata.indicator.values;
    })
  }

}
