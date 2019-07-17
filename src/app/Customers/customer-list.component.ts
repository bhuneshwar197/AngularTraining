import { Component } from '@angular/core';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
   moduleId: module.id,
   selector: 'customers',
   templateUrl: 'customer-list.component.html',
   styleUrls: ['customer-list.component.css']
  })

export class CustomerListComponent {
    pageTitle: string = "customer-List";
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: number;
    // constructor(){
    //     console.log('cunstructor called');
    // };

    constructor(private _customerService: CustomerService){
        
    }
    customers: ICustomer[];
    errorMessage: string;

    toggleImage(): void{
        this.showImage = !this.showImage;
    };

    ngOnInit(): void{
        console.log('this is ngOnInit');
        this._customerService.getCustomers().
        subscribe(result => this.customers = result,
        error => this.errorMessage=<any>error);
    };
}