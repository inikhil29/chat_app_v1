import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { ChatComponent } from './chat.components';
import { ChatPageRoutingModule } from './chat-components-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule
  ],
  declarations:  [ChatComponent, ChatPanelComponent, MessageInputComponent],
})
export class ChatModule {
  constructor(){
  }
}
