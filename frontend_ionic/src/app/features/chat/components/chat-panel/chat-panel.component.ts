import { Component, OnInit, Input} from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss'],
})
export class ChatPanelComponent  implements OnInit {
  @Input() messages: Message[] =  [
    { sender: 'user', content: 'Hello! this is a long message used for testing , this is a message with many words. I dont know what to type now so i am going to end the message here' },
    { sender: 'other', content: 'Hi there!, The is a long test message that is received from user this is for test.' },
    { sender: 'other', content: 'Hi there!, The is a long test message that is received from user this is for test.' },
    { sender: 'other', content: 'Hi there!, The is a long test message that is received from user this is for test.' },
    { sender: 'user', content: 'Hello! this is a long message used for testing , this is a message with many words. I dont know what to type now so i am going to end the message here' },
    { sender: 'user', content: 'Hello! this is a long message used for testing , thishe message here' },
    { sender: 'other', content: 'Hi there!, The is a long.' },
    { sender: 'user', content: 'Hello! this is a long message used for testing , this is a message with many words. I dont know what to type now so i am going to end the message here' },
    // Add more messages as needed
  ];
  
  constructor() {
      
  }

  ngOnInit() {
    
  }

}
