import { StulistComponent } from './Routing/stulist/stulist.component';
import { CourselistComponent } from './Routing/courselist/courselist.component';
import { PagenotComponent } from './Routing/pagenot/pagenot.component';
import { CoursedetailsComponent } from './Routing/coursedetails/coursedetails.component';
import { CoursedurationComponent } from './Routing/courseduration/courseduration.component';
import { CoursefeeComponent } from './Routing/coursefee/coursefee.component';
import { StudentdetailsComponent } from './Services/studentdetails/studentdetails.component';
import { StudentlistComponent } from './Services/studentlist/studentlist.component';
import { PostFromComponent } from './Reactiveform/PostFrom/PostFrom.component';
import { ReactiveComponent } from './Reactiveform/Reactive/Reactive.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Binding/test.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StudentdetailsComponent,
    StudentlistComponent,
    CourselistComponent,
    StulistComponent,
    CoursedetailsComponent,
    PagenotComponent,
    CoursedurationComponent,
    CoursefeeComponent,
    ReactiveComponent,
    PostFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
