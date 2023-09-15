import express, { urlencoded } from "express";
import dotenv from "dotenv"
import router from "./routes/route.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors"


const app = express();
export default app

app.use(express.json())
app.use(urlencoded({
    extended:true
}))

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  })
);

dotenv.config({
    path:"./config/config.env"
})

app.use("/api",router)

//error middle ware

app.use(errorMiddleware)
