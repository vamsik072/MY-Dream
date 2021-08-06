import { StudentService } from 'src/app/student.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-Reactive',
  templateUrl: './Reactive.component.html',
  styleUrls: ['./Reactive.component.css'],
})

// registrationFrom= new FormGroup({
//   UserName:new FormControl(''),
//   Password:new FormControl(''),
//   ConfirmPassword:new FormControl('')

// });
export class ReactiveComponent implements OnInit {
  userDetails!: FormGroup;

  showOutput: boolean = false;

  constructor(private fb: FormBuilder ,private stdService:StudentService) {}

  ngOnInit(): void {
    let validations = [Validators.required, Validators.pattern('[A-z]{3,}')];
    this.userDetails = this.fb.group(
      {
        username: ['', validations],
        password: [, validations],
        rpassword: [, Validators.required],
        age: [, [Validators.required, Validators.min(10), Validators.max(40)]],
      },
      { validators: passwordCheckValidator }
    );
    this.stdService.getData().subscribe(data =>{
      console.log(data);
      
          })
    // this.userDetails.patchValue({
    //   username: 'viswa'
    // })
  }

  submitForm() {
    console.log(this.userDetails.get('username'));
    this.showOutput = true;
    setTimeout(() => {
      this.showOutput = false;
    }, 2000);
  }
}

const passwordCheckValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {    //default values 

  const pass = control.get('password')?.value;
  const rPass = control.get('rpassword')?.value;
  // console.log(pass,  rPass);
  if (pass === rPass) {
    return null;
  } else {
    return {
      passwordError: {
        message: 'Both Password and Re-Enter Password must be same',
      },
    };
  }
};
