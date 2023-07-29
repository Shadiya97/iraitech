import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router:Router){}

  onClickSeries(){
    this.router.navigate(['/series'])
  }

  onClickForm(){
    this.router.navigate(['/form'])
  }
  onClickMagic(){
    this.router.navigate(['/magic'])
  }
 
}
