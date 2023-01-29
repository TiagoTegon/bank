import { Account } from "../models/account.model"

class AccountController {
  static getAllAccounts = (req: any, res: any) => {
    let accounts = localStorage.getItem('accounts') || []
    res.status(200).send(accounts)
  }

  static createAccount = (req: any, res: any) => {
    const { bankCode, agency, account } = req.body

    let id = localStorage.getItem('nextId') || '0'
    let accounts: Array<Account> = JSON.parse(localStorage.getItem('accounts') || '[]')
    accounts.push({
      id: id,
      bankCode: Number(bankCode),
      agency, 
      account
    })
    localStorage.setItem('accounts', JSON.stringify(accounts))
    const nextId = Number(id)+1
    localStorage.setItem('nextId', `${nextId}`)
    res.status(201).send({message: `Account created successfully`})
  }

  static clearStorage = (req: any, res: any) => {
    localStorage.clear()
    res.status(202).send({message: `Storage clear`})
  }
}



export default AccountController;
