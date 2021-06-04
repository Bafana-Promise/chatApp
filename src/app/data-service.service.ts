import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

getData(){
  return [
    {
      code: 'eb',
      imgUrl: "../../assets/avatar.png",
      imgUrl1: "../../assets/avatar4.png",
      userName: "Echo Bot",
      messages: [{
        text: "I'll echo whatever you send me",
        time: new Date()
      }]
    },
    {
      code: 'rb',
      imgUrl: "../../assets/avatar1.png",
      imgUrl1: "../../assets/avatar4.png",
      userName: "Reverse Bot",
      messages: [{
        text: "I'll reverse whatever you send me",
        time: new Date()
      }]
    },
    {
      code: 'wb',
      imgUrl: "../../assets/avatar2.png",
      imgUrl1: "../../assets/avatar4.png",
      userName: "Waiting Bot",
      messages: [{
        text: "I'll wait however many seconds you send to me before responding. Try sending '3'Select",
        time: new Date()
      }]
    }
  ];
}

  constructor() { }
}
