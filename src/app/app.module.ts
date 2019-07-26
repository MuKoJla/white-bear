import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutGalleryComponent } from './main/about-gallery/about-gallery.component';
import {AppRoutingModule} from './app-routing.module';
import { RoomsComponent } from './main/rooms/rooms.component';
import { RoomComponent } from './main/rooms/room/room.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './main/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutGalleryComponent,
    RoomsComponent,
    RoomComponent,
    ContactComponent,
    FooterComponent,
    FeaturesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
