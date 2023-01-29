import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCOUNTS_URL } from '../shared/constants/urls';
import { IAccountCreate } from '../shared/interfaces/IAccountCreate';
import { Account } from '../shared/models/Account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(ACCOUNTS_URL);
  }

  createAccount(accountCreate: IAccountCreate): Observable<Account> {
    return this.httpClient.post<Account>(ACCOUNTS_URL, accountCreate)
  }
}
