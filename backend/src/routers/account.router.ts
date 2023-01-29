import { Router } from "express"
import AccountController from "../controllers/accountsController"

const router = Router()

router.get("/api/accounts", AccountController.getAllAccounts)
router.post("/api/accounts", AccountController.createAccount)
router.delete("/api/accounts", AccountController.clearStorage)

export default router