import { asyncError } from "../middlewares/errorMiddleware.js";
import { List } from "../model/list.js";

export const fetchList = asyncError(async (req, res, next) => {

    const todo = await List.find({});
    console.log("here" + todo)
    res.status(200).json({
        success: true,
        todo
    })
})

export const createTodo = asyncError(async (req, res, next) => {

    const { message } = req.body

    const messageCreate = { message }

    await List.create(messageCreate)

    res.status(200).json({
        success: true,
    })
})

export const deleteTodo = asyncError(async(req,res,next)=>{

    const listId = req.params.id

    await List.findByIdAndRemove(listId)

    const todo = await List.find({})

    res.status(200).json({
        success:true,
        message:"data deleted succsesfully",
        todo

    })
})

export const update = asyncError(async(req,res,next)=>{

    const listId = req.params.id
    const {message} = req.body

    const updateField = {message}

    const updatedList = await List.findByIdAndUpdate(listId,updateField,{new:true})

    res.status(200).json({
        success:true,
        updatedList
    })
})

