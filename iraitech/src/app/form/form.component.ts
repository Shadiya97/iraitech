import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
add=false
  constructor() { }

  ngOnInit(): void {
  }


  addAnother(){
this.add=true
  }

  onSubmit(form:NgForm){
    console.log('Phone numbers are',form.value)
  }
}
