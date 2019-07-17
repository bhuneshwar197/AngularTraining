import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'Bhunesh',
  //template: '<h1>Hello {{name}}</h1>'
  templateUrl: './home.html'
})
export class AppComponent {
  name: string='Angular Forms.'
  language = ['English', 'German', 'Spanish', 'Other'];

  model = new Employee('Bhunes','Kumar',true,'Monthly','default');
  hasPrimaryLanguageError=false;
  validatePrimaryLanguage(value:string){
    console.log('lang:' + this.model.primaryLanguage);
    if(value==='default'){
      this.hasPrimaryLanguageError=true;
    }
    else{
      this.hasPrimaryLanguageError=false;
    }
  }
  firstnameuppercase(value: string){
    if(value.length>0){
      this.model.firstname = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}

