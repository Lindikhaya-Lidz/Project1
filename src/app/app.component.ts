/*======================================================================================
-----------------------------------TABLE OF CONTENT-------------------------------------

ADD EMOJI INTO TEXTAREA
DIARY ENTRY DATA
CURRENT TIME
REMOVE EMOJI LIST
CLEAR TEXTAREA
EMOJI LIST
========================================================================================*/

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public textArea: string = '';
  entryList:string[] = [];
  hours?:Number;
  minutes?:Number;
  emojiField:boolean = false;

  //ADD EMOJI INTO TEXTAREA
  public addEmoji(event:any){
    this.textArea = `${this.textArea}${event.emoji.native}`;
  }

  //DIARY ENTRY DATA
  entry(){
    this.entryList.push(this.textArea);

    //CURRENT TIME 
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();

    //REMOVE EMOJI LIST
    this.emojiField = false;
    
    //CLEAR TEXTAREA
    this.textArea = '';
  }

  //EMOJI LIST
  showEmojiField(){
    if(this.emojiField){
      this.emojiField = false;
    }else{
      this.emojiField = true;
      
    }
  }

  constructor(){
    
  }
}
