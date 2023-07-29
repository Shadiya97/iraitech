import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  index:number=0;
  result:number=2;
  constructor() { }

  ngOnInit(): void {
  }

findNumber(){
    let position = +this.index+1
    if (position %2!==0) {
      this.result= (position*position)+1
    }
    else this.result= (position*position)-1
    console.log('position is',position)
    console.log('result is', this.result)
  }
}



