import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from 'src/Models/clients';

@Injectable({
  providedIn: 'root'
})
export class DataBindService {
  public clientData = new Subject<Client>;
  constructor() { }

  updateClientData(data: any){
    this.clientData.next(data);
  }
}
