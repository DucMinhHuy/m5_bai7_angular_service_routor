import {Component, OnInit} from '@angular/core';
import {ServicedateService} from "../servicedate.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit{
  output ="";
  constructor(private dateUtilService : ServicedateService) {
  }
  ngOnInit() {
  }
  // @ts-ignore
  onChange(value){
    this.dateUtilService.getDiffToNow(value);
  }

}
