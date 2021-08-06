import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  public course = [
    { "id": 1, "name": "angular" },
    { "id": 2, "name": "React" },
    { "id": 3, "name": "Vue" },
    { "id": 4, "name": "Bootstrap" },
    { "id": 5, "name": "monoDB" }
  ];

  public selectedid: any;

  constructor(private route: Router, private activateR: ActivatedRoute) { }

  ngOnInit() {
    this.activateR.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || "");
      this.selectedid = id;
    });
  }
  onselect(x: any) {

    // this.route.navigate(['/course', x.id]);
    this.route.navigate([x.id],{relativeTo:this.activateR});


  }

  isselected(x:any) {
    return x.id === this.selectedid;
  }

}

