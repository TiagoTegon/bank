import express from "express"
import cors from "cors"
import routes from "./routers"
import { LocalStorage } from "node-localstorage"

global.localStorage = new LocalStorage('./scratch')

const app = express()
app.use(express.json())
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

routes(app)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})