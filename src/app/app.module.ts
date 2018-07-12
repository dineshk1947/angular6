import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamModule } from './exam/exam.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundService } from './services/not-found.service';
import{ EmployeeModule} from './employees/employee.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {SlideshowModule} from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashBoardComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductRoutingModule,
    ExamModule,
    ProductModule,
    BsDropdownModule,
    EmployeeModule,
    TooltipModule,
    ModalModule,
    SlideshowModule,
    //SidebarModule.forRoot(),
  
    // the root routing module must on the end of this array
    AppRoutingModule
  ],
  providers: [NotFoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }

