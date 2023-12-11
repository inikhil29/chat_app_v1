import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'chat_page_test',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('../features/chat/chat-components.module').then( m =>  m.ChatModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
