import express from "express"
import accounts from "./account.router"

const routes = (app: any) => {
  app.use(
    express.json(), 
    accounts
  )
}

export default routes