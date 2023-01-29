import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { BankService } from 'src/app/services/bank.service';
import { IAccountCreate } from 'src/app/shared/interfaces/IAccountCreate';
import { Bank } from 'src/app/shared/models/Bank';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  bank!: Bank;
  accountForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    bankService: BankService,
    private accountService: AccountService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.code)
        bankService.getBankByCode(params.code).subscribe((serverBank) => {
          this.bank = serverBank;
        });
    });
  }
  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      agency: ['', Validators.required],
      account: ['', Validators.required],
    });
  }

  get formControl() {
    return this.accountForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.accountForm.invalid) return;

    const formValues = this.accountForm.value;
    const account: IAccountCreate = {
      bankCode: this.bank.code,
      agency: formValues.agency,
      account: formValues.account,
    };

    this.accountService.createAccount(account).subscribe(_ => {
      this.router.navigateByUrl('/')
    })

    alert(
      `Account created successfully`
    );
  }
}
