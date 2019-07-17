import {  
        Component,
        ViewChild,
        ViewContainerRef,
        ComponentFactoryResolver

      } from '@angular/core';
  impoert 

@Component({
  selector: 'app-root',
  template:`
  <div class="comp">
    <button (click)="reset()"> Reset Count  </button>
    <div class="color-it">
      <h2>Parent component</h2>
      <div>
        Count from child: {{count}}
      </div>
      <child-comp
        [parentCount]="count"
        (change)="updateFromChild($event)">
      </child-comp>
    </div>
  </div>`,
  styles: [`
      .comp{
          border: 5px solid #c4e6ff;
          border-radius: 10px;
          background-color: #c3E480;
          height: 100px;
      }    
  `]
})
export class AppComponent {
  //title = 'AngularInputOutput';
  count: number = 0;

  updateFromChild($event){
    this.count = $event;
  }

  reset(){
    this.count = 0;
  }

  createMessageComponent(){

  }

  createEmailComponent(){

  }
}
