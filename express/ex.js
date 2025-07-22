// const express = require('express')
import express from 'express';
function calcSum(a,b){
    let x=a+b;
        return x;
}

const app= express();
app.get("/",(req,res)=>{
    // const a=Number(req.query.a);
    // const b=Number(req.query.b);
    // const x=calcSum(a,b);
    res.send("Hi there");
})
app.get("/txt",(req,res)=>{
    const a=Number(req.query.a);
    const b=Number(req.query.b);
    const x=calcSum(a,b);
    res.send("your asn is "+x.toString());
})
app.listen(3000,()=>{console.log("server runned")});
// writing anything in link like ?a=34&b=34 is called query parameter

// req -> request and response -> res

/*logic for doctor is
request made
1 get get the consultation
2 post going to get a new kidney inderted
3 put kidney replaed (update or replace )
4 delete hand wash after operation (delete anything use delete))
 */

/*
Status code
200 everything ok
404 doctor not in hospital
500 mid surhery light went away
411 inputs are incorrect*/
// 403 you were not allowed in the hospital
