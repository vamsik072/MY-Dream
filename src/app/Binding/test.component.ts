import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="vamsi";

  public propery=true;

  public Group={
    Textcolor:this.propery
  }

  public requied=true;

  public Group2={
     color:"pink"

  }

  public event="";

  public event2="";


  public twoway="";


  public ngif=false;


  public MyChoice=true;


  public subjects=["Angualr","React","vue"];



  // ***Component Interaction***


  @Input('fromparent')public parent:any;

  // or

  // @Input()public fromparent:any;



 @Output() public childinfo=new EventEmitter;
 


  constructor() { }

  ngOnInit() {

  }
  onclick(){
    this.event="welcome vamsi";

  }


message(msg: any){
// console.log(msg);
// this.event2="welcome" + " "+ msg;
this.event2=`welcome ${msg}`;

}

fireevent(){
  this.childinfo.emit("this is from child");
}
}



