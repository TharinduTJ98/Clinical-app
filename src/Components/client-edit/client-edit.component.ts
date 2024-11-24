import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataBindService } from 'src/Services/data-bind.service';
import { DataTransferService } from 'src/Services/data-transfer.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent {
  clientForm!: FormGroup;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private dataTransfer: DataTransferService,
    private fb: FormBuilder,
    private dataBind: DataBindService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getClientDetails()
  }

  onFormSubmit(): void{
    this.dataBind.updateClientData(this.clientForm.value);
  }

  getClientDetails(): void{
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.dataTransfer.getClientData(this.userId).subscribe((clientDetails: any)=>{
      if(clientDetails && clientDetails.length>0){
        this.clientForm.patchValue(clientDetails[0]);
        this.dataBind.updateClientData(clientDetails[0]);
      }
    })
  }

  createForm():void{
    this.clientForm = this.fb.group({
      username: [''],
      email: [''],
      firstName: [''],
      lastName: [''],
      age: [''],
      gender: [''],
      role: [''],
      isActive: [false]
    })
  }
}
