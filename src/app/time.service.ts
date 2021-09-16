import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TimeService {
  
  TimeEntry:any[]= [];

  addTime(timeNow:any){
    this.TimeEntry.push(timeNow)
  }
  
  getTime(){
    //return this.TimeEntry[this.TimeEntry.length - 1];
    return this.TimeEntry;
  }
  constructor() { }
}
