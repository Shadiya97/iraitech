import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  receivedData:any=''
  private subscription: Subscription = new Subscription;

  constructor(private communicationService:CommunicationService) { }

  ngOnInit(): void {
    this.subscription=this.communicationService.receiveData().subscribe(data =>{this.receivedData=data})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
