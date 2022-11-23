import {Component, OnInit} from '@angular/core';
import {MyserviceService} from "../myservice.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
 newcomponent ="New Component";
 // @ts-ignore
  todayDate:Date;
 constructor(private myservice : MyserviceService) {
 }
 ngOnInit() {
   // @ts-ignore
   this.todayDate=this.myservice.showTodayDate(console.log(this.todayDate));
 }
}
