import express from "express";
const app = express();
const PORT = 4000;


// app.get('/',(req,res)=>{
//     console.log()
// })
app.listen(PORT,()=>{
    console.log('sever or listening on ${PORT}')
})