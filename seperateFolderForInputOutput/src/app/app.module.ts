import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from 'src/child.component';
import { MessageComponent } from './message.component';
import { EmailComponent } from './email.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MessageComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
