import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from 'src/app/shared/models/Bank';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  bank!: Bank
  accountForm!: FormGroup
  isSubmitted = false

  constructor(private formBuilder: FormBuilder,activatedRoute: ActivatedRoute, bankService: BankService) {
    activatedRoute.params.subscribe((params) => {
      if(params.code)
        bankService.getBankByCode(params.code).subscribe((serverBank) => {
          this.bank = serverBank
        })
    })
  }
  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      agency:['', Validators.required],
      account:['', Validators.required]
    })
  }

  get formControl() {
    return this.accountForm.controls
  }

  submit() {
    this.isSubmitted = true
    if(this.accountForm.invalid) return

    alert(`account: ${this.formControl.account.value} | agency: ${this.formControl.agency.value} | bank code: ${this.bank.code}`)
  }
}
