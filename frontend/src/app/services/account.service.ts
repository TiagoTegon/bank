import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_accounts } from 'src/data';
import { ACCOUNTS_URL } from '../shared/constants/urls';
import { Account } from '../shared/models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(ACCOUNTS_URL)
  }
}
