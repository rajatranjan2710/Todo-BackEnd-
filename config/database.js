// import mongoose from "mongoose";

// export const connectDb = async()=>{
//     console.log("connecting database");
//     const {connection} = await mongoose.connect("mongodb+srv://rajat2710:rajat%402710@cluster0.gl9zw9j.mongodb.net/todolist?retryWrites=true&w=majority")
    
//         console.log(`Database is connected with ${connection.host}`)
//     console.log("failed")
    
// }

import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log("Connecting to the database");
    const { connection } = await mongoose.connect(
      "mongodb+srv://rajat2710:rajat%402710@cluster0.gl9zw9j.mongodb.net/todolist?retryWrites=true&w=majority"
    );

    console.log(`Database is connected with ${connection.host}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};
