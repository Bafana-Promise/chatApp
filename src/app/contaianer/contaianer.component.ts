import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-contaianer',
  templateUrl: './contaianer.component.html',
  styleUrls: ['./contaianer.component.scss']
})
export class ContaianerComponent implements OnInit {

  selectedBot: any = {};
  isSelected: boolean = false;
  messageSent: boolean;
  textValue: string = "";
  message: string = "";
  messageCount: number = 3;
//array of any
  bots: any[]=[]

  reversedStr: string="";
  mySeconds: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.bots=this.dataService.getData()
  }

  onClick(bot){
    if(this.messageCount > 0 ){
      this.messageCount--;
    }
    else{
        this.messageCount = 0;
    }
    this.selectedBot = bot;
    this.isSelected = true;
    
  }

  submit(form){
    form.submitted = true;
    this.messageSent = true
//check the selected code 
   if(this.selectedBot.code == 'eb'){
     let userMessage = {
       text: this.textValue,
       time: new Date()
     }
    this.duplicateText(userMessage);
   }

//check the selected code 
   if(this.selectedBot.code == 'rb'){
    let userMessage = {
      text: this.textValue,
      time: new Date()
    }
   this.reverseText(userMessage);
  }

//check the selected code 
  if(this.selectedBot.code == 'wb'){
    let userMessage = {
      text: this.textValue,
      time: new Date()
    }
   this.waitingTime(userMessage);
  }
 
  }

//reverse the given string
  reverseText(str){
    this.reversedStr = str.text.split("").reverse().join("");
//push the value i got from the user 
    this.selectedBot.messages.push(str);
    this.selectedBot.messages.push({text : this.reversedStr});
  }

//repeat a string 
  duplicateText(message){
//push what i get from the user to b displayed
    this.selectedBot.messages.push(message);
    this.selectedBot.messages.push(message);
  }

//waiting time for a text
  waitingTime(number){
//if interger set is a number then push that number
    if(Number.isInteger(Math.floor(Number(number.text))) ){
      this.selectedBot.messages.push(number);
//set timer for waiting seconds 
      setTimeout(() => {
       this.mySeconds = `I waited ${Number(number.text)} seconds to send you this.`;
       this.selectedBot.messages.push({text : this.mySeconds});
//times a number by one thousand to get seconds
     }, Number(number.text)*1000)
    
    }else{
//return an error i don't understand
      this.selectedBot.messages.push(number);
      this.mySeconds = `I do not understand ${(Number(number.text))} try inserting a number .`;
      this.selectedBot.messages.push({text : this.mySeconds});
    }
  }

}