import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildtwoComponent } from '../viewchildtwo/viewchildtwo.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {
@ViewChild(ViewchildtwoComponent)
child : ViewchildtwoComponent = new ViewchildtwoComponent
  constructor() { }

  ngOnInit(): void {
    console.log(this.child)
  }


  one(){
this.child.username=' rushikesh raut  '
  }
  two(){
this.child.clickme()
  }
}
