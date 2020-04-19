import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { MyPipePipe } from './my-pipe.pipe';
import { SearchPipePipe } from './search-pipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MyPipePipe,
    SearchPipePipe,
    StudentComponent,
    StudentdetailsComponent,
    PagenotfoundComponent,
    StudentregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
