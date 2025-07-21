import express from 'express'
var user=[{name:"lakhan",age:"34"},{age:"19"},{email:"dushantpariskar@gmail.com"},];
var app=express();

function sum(a,b){return Number(a)+Number(b)};
app.get("/",(req,res)=>{
        var a =req.query.a;
        var b =req.query.b;
        const x=sum(a,b);
    var name=user[0].name;
    var age=user[0].age;
    var op=[{name},{age},{x}]
    res.send(op);
})
app.listen(2000,()=>{console.log("running")})

