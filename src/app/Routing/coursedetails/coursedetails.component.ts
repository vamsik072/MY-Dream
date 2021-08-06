import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  public courseId: any;

  constructor(private activateR: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activateR.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || "");
      this.courseId = id;
    });


  }
  goHome() {
    this.router.navigate(['/course']);


  }

  toprevious() {
    let previousId = this.courseId - 1;
    this.router.navigate(['/course', previousId]);
  }


  tonext() {
    let nextId = this.courseId + 1;
    this.router.navigate(['/course', nextId]);
  }
  goback() {
    let selectedId = this.courseId ? this.courseId : null;
    // this.router.navigate(['/course',{id:selectedId}]);

    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.activateR });
  }

  tocourseduration() {
this.router.navigate(['duration'],{relativeTo:this.activateR});
  }
  goCoursefee() {
    this.router.navigate(['fee'],{relativeTo:this.activateR});
  }


}


