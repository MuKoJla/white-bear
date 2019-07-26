import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutGalleryComponent } from './main/about-gallery/about-gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomsGalleryComponent } from './main/rooms-gallery/rooms-gallery.component';
import { RoomComponent } from './main/rooms-gallery/room/room.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './main/features/features.component';

import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutGalleryComponent,
    RoomsGalleryComponent,
    RoomComponent,
    ContactComponent,
    FooterComponent,
    FeaturesComponent,
    RoomsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    JwSocialButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
