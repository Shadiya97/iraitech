import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import {Subscription } from 'rxjs'
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
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
