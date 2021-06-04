import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-container',
  templateUrl: './child-container.component.html',
  styleUrls: ['./child-container.component.scss']
})
export class ChildContainerComponent implements OnInit {
  bots = [
    {
      imgUrl: "../../assets/avatar.png",
      userName: "Echo Bot",
      messages: [{
        text: "I'll echo whatever you send me",
        time: new Date().getTime()
      }]
    },
    {
      imgUrl: "../../assets/avatar1.png",
      userName: "Reverse Bot",
      messages: [{
        text: "ll reverse whatever you send me",
        time: new Date().getTime()
      }]
    },
    {
      imgUrl: "../../assets/avatar2.png",
      userName: "Waiting BotI",
      messages: [{
        text: "I'll wait however many seconds you send to me before responding. Try sending '3'Select",
        time: new Date().getTime()
      }]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
