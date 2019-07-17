import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailComponent } from './email.component';
import { MessageComponent } from './message.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent, EmailComponent]
})
export class AppModule { }
