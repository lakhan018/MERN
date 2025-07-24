const express = require("express")
const app = express();
app.get('/',(req,res)=>{

    const username = req.headers.username;
    const password = req.headers.password;

    if(username==='harkirat' && password==='pass'){
        res.send("you can acess data ");
    }
});app.listen(3000);