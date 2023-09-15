import express from "express"
import { createTodo, deleteTodo, fetchList, update } from "../controllers/list.js"


const router = express.Router()


router.get("/fetchlist",fetchList)

router.post("/create",createTodo)

router.delete("/delete/:id",deleteTodo)

router.patch("/update/:id",update)

export default router