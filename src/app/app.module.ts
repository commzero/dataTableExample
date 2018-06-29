import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridDetailsComponent } from './grid/grid-details/grid-details.component';
import { TripService } from './services/trip.service';
import { UserService } from './services/user.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DatePipe } from '@angular/common';
import { Ng2OrderModule } from 'ng2-order-pipe'

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridDetailsComponent
  ],
  imports: [
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    NgxSpinnerModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [
    BsModalService,
    TripService,
    UserService,
    DatePipe
  ],
  entryComponents: [
    GridDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
