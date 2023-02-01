import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchildtwo',
  templateUrl: './viewchildtwo.component.html',
  styleUrls: ['./viewchildtwo.component.scss']
})
export class ViewchildtwoComponent implements OnInit {

  constructor() { }
username = 'rushi'
  ngOnInit(): void {}
  
  clickme(){
    alert(this.username)
  }
}
