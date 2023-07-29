import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
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
