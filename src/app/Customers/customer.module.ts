import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerGuardService } from './customer-guard.service';
import { CustomerService } from './customer.service';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerFilterPipe } from './customer-pipe.component';


//import {  } from '@angular/common';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'customers', component: CustomerListComponent},
            {path: 'customer/:accountNumber', canActivate:[CustomerGuardService] ,component: CustomerDetailComponent},
        ])
        
    ],
    declarations: [
        CustomerListComponent,
        CustomerFilterPipe,
        CustomerDetailComponent       
    ],
    providers: [
        CustomerGuardService,
        CustomerService
    ]
})

export class CustomerModule{
    
}

