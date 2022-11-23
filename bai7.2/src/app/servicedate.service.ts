import { Injectable } from '@angular/core';
// import addYears from 'date-fns/addYears';
// import differenceInYears from 'date-fns/differenceInYears';
import {addDays, addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from "date-fns";
// cai dat libary cho viec tinh toan
// ng g i date-fns -s
@Injectable({
  providedIn: 'root'
})
export class ServicedateService {

  constructor() { }
  getDiffToNow(diff:string | number | Date):string {
    const result:string[]=[];
    const now =new Date();
    diff =new Date(diff);
    const years = differenceInYears(now,diff);
    if(years>0){
      result.push(`${years} years`);
      diff= addYears(diff,years);
      console.log(diff);
    }
    const months=differenceInMonths(now,diff);
    result.push(`${months}months`);
    if(months>0){
      diff=addMonths(diff,months);
    }
    const days=differenceInDays(now,diff);
    if(days>0){
      diff=addDays(diff,days);
    }
    return result.join('');
  }
}
