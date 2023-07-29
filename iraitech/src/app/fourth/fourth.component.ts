import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

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
