import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../shared/models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  apiUrl = 'https://brasilapi.com.br/api/banks/v1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll():Observable<Bank[]> {
    return this.httpClient.get<Bank[]>(this.apiUrl)
  }

  getBankByCode(searchTerm:string):Observable<Bank> {
    return this.httpClient.get<Bank>(`${this.apiUrl}/${searchTerm}`)
  }
}
