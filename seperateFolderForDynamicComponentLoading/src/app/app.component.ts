import {  
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { MessageComponent } from './message.component';
import { EmailComponent } from './email.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicComponent';
  @ViewChild('messageContainer',{ read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver){
  }
   createMessageComponent(message){
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(MessageComponent);
      const componentRef = this.entry.createComponent(factory);
      componentRef.instance.message = message;
   }

   createEmailComponent(email){
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(EmailComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.email = email;
 }

}
