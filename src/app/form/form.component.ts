import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
profile = this.fb.group({
  name:[''],
  date:[''],
  note:['']
})
  ngOnInit(): void {
  }
  add(){
    console.log(this.profile.value.name)
  }
}
