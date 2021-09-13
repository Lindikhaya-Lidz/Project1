/*==================================================================================
----------------------------------------TABLE OF CONTENT---------------------------
TEXTAREA TEXT
===================================================================================*/


import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  //TEXTAREA TEXT
  @Input() entry?:string[];

  @Input()Hours?:Number;
  @Input()Minutes?:Number;
  todayDate: number = Date.now();

  constructor() {
    
  }
  ngOnInit(): void {
   
  }

}
