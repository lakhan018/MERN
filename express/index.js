const express = require('express')
function calcSum(a,b){
    let x=a+b;
        return x;
}

const app= express();
app.get("/",(req,res)=>{
    const a=Number(req.query.a);
    const b=Number(req.query.b);
    const x=calcSum(a,b);
    res.send(x.toString());
})
app.listen(3000,()=>{console.log("server runned")});
