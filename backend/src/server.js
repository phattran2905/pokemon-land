import { config } from "dotenv"
import Express from "express"
import morgan from "morgan"
import cors from "cors"
import apiRouter from "./routes/api.js"
import { connectDb, dropDb } from "./db.js"
import createMockupData from "./mockup-data/mockup.js"
import handleErrors from "./middleware/RespondError.js"

config()
connectDb()

const app = Express()
app.use(cors())
app.use(morgan("dev"))
app.use(Express.json())

app.get("/", (req, res) => {
	res.send("Monster Land")
})

// Create mockup data
app.get("/create-mockup-data", async (req, res) => {
	await dropDb()
	createMockupData()
	res.sendStatus(201)
})

app.use("/api/v1", apiRouter)
app.use(handleErrors)

const PORT = process.env.PORT || 5010
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
