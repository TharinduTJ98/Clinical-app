import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) { }

  getAllData():Observable<any>{
    return this.http.get('http://localhost:3000/clients');
  }

  getClientData(userID: number):Observable<any>{
    return this.http.get(`http://localhost:3000/clients?userId=${userID}`)
  }
}
