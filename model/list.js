import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

export const List = mongoose.model("List",Schema,"list");