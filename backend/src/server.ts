import express from "express"
import cors from "cors"
import { sample_accounts } from "./data"

const app = express()
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

app.get("/api/accounts", (req, res) => {
  res.send(sample_accounts)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})