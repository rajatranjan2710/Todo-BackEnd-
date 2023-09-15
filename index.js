import app from "./app.js";



app.get("/",(req,res,next)=>{
    res.send("Server is working")
})

app.listen(process.env.PORT,()=>
console.log(`server is working on${process.env.PORT}`)
)