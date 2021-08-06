import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {


  public students:any=[];
  public errmsg:any;

  constructor(private stdService:StudentService) { }
  ngOnInit() {
    this.stdService.getStudents()
   .subscribe(arg => this.students = arg,
     error=>this.errmsg=error);
   }

 }
