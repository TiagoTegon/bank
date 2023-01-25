import { Injectable } from '@angular/core';
import { sample_accounts } from 'src/data';
import { Account } from '../shared/models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAll():Account[] {
    return sample_accounts
  }
}
