import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {ContactComponent} from './contact/contact.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RoomDetailsComponent} from './rooms/room-details/room-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
