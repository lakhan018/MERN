const express = require("express");
const app = express();
app.get("/", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidney = req.query.kidney;

  // if (!(username === "harkirat" && password === "pass")) {
  //     res.status(400).json({ msg: "wrong username password" });

  //   return;}
  // dumb way of doing I/p validation .

      {
    // console.log(typeof(kidney))
    if ((kidney != 1 && kidney != 2)) {
      res.status(400).json({ msg: "kidney check" });
      return;

    }
  }
});

app.put("/",(req,res)=>{

    kidney=1;
    res.json({"msg":"done repalce kidney count to 1"})

})
app.listen(3000);