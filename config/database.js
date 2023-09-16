import mongoose from "mongoose";

export const connectDb = async()=>{
    const {connection} = await mongoose.connect("mongodb+srv://rajat2710:rajat@2710@cluster0.gl9zw9j.mongodb.net/todolist?retryWrites=true&w=majority")
    
        console.log(`Database is connected with ${connection.host}`)
    
}
