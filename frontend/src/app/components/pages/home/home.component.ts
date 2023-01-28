import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/shared/models/Account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  accounts: Account[] = [];
  constructor(private accountService: AccountService) {
    let accountsObservable: Observable<Account[]>;
    accountsObservable = accountService.getAll();

    accountsObservable.subscribe((serverAccounts) => {
      this.accounts = serverAccounts;
    });
  }
}
