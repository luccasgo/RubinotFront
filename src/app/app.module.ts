import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OnlineCharactersComponent } from './online-characters/online-characters.component';
import { GuildService } from './guild.service';

@NgModule({
  declarations: [
    AppComponent,
    OnlineCharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GuildService, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
