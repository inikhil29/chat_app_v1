import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
})
export class MessageInputComponent {
  @Output() sendMessage = new EventEmitter<string>();
  message: string = '';

  onSend() {
    if (this.message.trim() !== '') {
      this.sendMessage.emit(this.message);
      this.message = ''; // Clear the input after sending
    }
  }
}
