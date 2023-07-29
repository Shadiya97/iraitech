import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  communicate = new Subject<any>()

  sendData(text:any){
    this.communicate.next(text)
  }

  receiveData(){
    return this.communicate.asObservable()
  }
}
