import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  centerText: string=''
  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
  }

  onInputChange(newtext:any){
    this.communicationService.sendData(newtext);
    // console.log('newtext is',newtext);
  }
  
}
