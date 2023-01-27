import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  bank:Bank = {
    code: 0,
    name: '',
    ispb: '',
    fullName: ''
  }
  constructor(private bankService: BankService, activatedRoute: ActivatedRoute) {
    let banksObservable:Observable<Bank[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.bankService.getBankByCode(params.searchTerm).subscribe((serverBank) => {
          this.bank = serverBank
        })
      } else {
        banksObservable = bankService.getAll()
        banksObservable.subscribe((serverBanks) => {
          this.banks = serverBanks
        })
      }
    })
  }

  ngOnInit() {
  }
}
