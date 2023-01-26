import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from 'src/app/shared/models/Bank';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  banks:Bank[] = []
  constructor(private bankService: BankService) {
    let banksObservable:Observable<Bank[]>
    banksObservable = bankService.getAll()

    banksObservable.subscribe((serverBanks) => {
      this.banks = serverBanks
    })
  }

  ngOnInit() {
  }
}
