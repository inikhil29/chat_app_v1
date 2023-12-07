import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-component',
  templateUrl: 'chat.components.html',
  styleUrls: [],
})
export class ChatComponent implements OnInit {

  constructor() {
    console.log("called chat compoennt......xxxxxx");
  }

  ngOnInit(): void {
    console.log("called chat compoennt......xxxxxx");   
  }

}
