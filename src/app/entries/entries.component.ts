/*==================================================================================
----------------------------------------TABLE OF CONTENT---------------------------
TEXTAREA TEXT
===================================================================================*/

import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import{ AppComponent } from'../app.component';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  //TEXTAREA TEXT
  @Input() entry?:string[];
  @Input()Time?:any;
  todayDate: number = Date.now();
  takeIt = this.appComp.lastTime;
   
  deleteEntry(){
    
  }

  constructor(public appComp:AppComponent) {
  }
  ngOnInit(): void {
    
  }

}
