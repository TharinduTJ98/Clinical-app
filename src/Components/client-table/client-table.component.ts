import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataTransferService } from 'src/Services/data-transfer.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[]  = ['userId','username','email','age','gender','role','isActive'];

  constructor(private dataService: DataTransferService){
  }

  ngOnInit(): void {
    this.getAllDate();
  }

  getAllDate(): void{
    this.dataService.getAllData().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res);
    })
  }

}
