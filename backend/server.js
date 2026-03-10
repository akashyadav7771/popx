import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import userRoutes from "./routes/userRoute.js"


dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

connectDB()


app.use("/api",userRoutes)
app.use("/api",authRoutes)

const PORT = process.env.PORT

app.listen(PORT,()=>{
 console.log(`Server running on ${PORT}`)
})