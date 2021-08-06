import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-PostFrom',
  templateUrl: './PostFrom.component.html',
  styleUrls: ['./PostFrom.component.css'],
})
export class PostFromComponent implements OnInit {
  userDetails!: FormGroup;
  backendData: any;
  ss: any;
  ssd: any = [];
  constructor(private fb: FormBuilder, private stdService: StudentService) {}

  ngOnInit() {
    this.userDetails = this.fb.group({
      id: [''],
      name: [''],
    });

    this.stdService.getData().subscribe((data) => {
      this.backendData = data;
    });
  }

  submitForm1() {
    // console.log(this.userDetails.value);
    this.stdService.postProduct(this.userDetails.value).subscribe(
      (data: any) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );

    this.stdService.getData().subscribe(data => 
      this.backendData = data);
    ;
  }

  serach() {
    this.stdService.getDatabyID(this.ss).subscribe(
      data1 => {
        console.log(data1);
        this.ssd = data1;
      },
      error => {
        this.ssd = [];
      }
    );
  }
}
