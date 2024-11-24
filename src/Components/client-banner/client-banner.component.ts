import { Component, OnInit } from '@angular/core';
import { Client } from 'src/Models/clients';
import { DataBindService } from 'src/Services/data-bind.service';

@Component({
  selector: 'app-client-banner',
  templateUrl: './client-banner.component.html',
  styleUrls: ['./client-banner.component.css']
})
export class ClientBannerComponent implements OnInit{
  clientDetails!: Client;
  constructor(
    private dataBind: DataBindService
  ){  }
  ngOnInit(): void {
    this.loadClientData()
  }

  loadClientData(){
    this.dataBind.clientData.subscribe((data:any)=>{
      this.clientDetails = data;
    })
  }


}
