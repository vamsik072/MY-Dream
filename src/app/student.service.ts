import { studentInterface } from './Services/studentlist/student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getEmployees(): any {
    throw new Error('Method not implemented.');
  }




  constructor(private http:HttpClient){ }

  private url="../assets/Student.json";
  private url2="http://localhost:5000/"

  getStudents():Observable<studentInterface[]>{
    return this.http.get<studentInterface[]>(this.url)
    .pipe(catchError(this.errorHandler))

  }


  errorHandler(error:HttpErrorResponse){
    return throwError(error.message) ||
    "Unknow Server Error"

  }


  // received data form backend
  getData():Observable<any>{
    return this.http.get<any>(this.url2+"products");
  }

  // posting data to backend
  postProduct(data:any){    
    return this.http.post(this.url2+"products", data);
  }


  getDatabyID(id:number):Observable<any>{
    return this.http.get<any>(this.url2+"products/"+id); //to recevied data of secific id

  }
}



