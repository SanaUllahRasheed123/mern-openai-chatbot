import { log } from 'console';
import express from 'express';
const app = express();


// GET -
// PUT -
//  POST -
// DELETE
app.use(express.json())
app.get('/hello',(req,res,next)=>{
  console.log(req.body.age);
  return res.send("Hello");

})

app.listen(5000,()=>console.log("Server Opened"))

