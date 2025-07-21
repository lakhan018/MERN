import express from "express";
var users = [
  {
    name: "lakhan",
    kidney: [{healthy: true },{healthy: false},{healthy:true}],
    metadata: [{  pronouns: "he/him" }],
  },
];
// console.log(users[1])
var app = express();
// things thast we send -> popular parameter is Queryparameter

app.get("/", (req, res) => {
  var totalKidney=users[0].kidney.length;
  var truekid=users[0].kidney.filter(k=>k.healthy===true).length;
   var falsekid=users[0].kidney.filter(k=>k.healthy===false).length;
  var metadata=users[0].metadata;
  const op=[{"unhealthy meri jaan": falsekid},{"kay re lavdya":truekid},{"total kidney":totalKidney},{"metadata":metadata}];
res.send(op);

});

app.post("/", (req, res) => {
const ishealthy=req.body.ishealthy;
user[0].kidney.push({healthy:ishealthy})
res.json({msg:"done"});

});

app.put("/", (req, res) => {});

app.delete("/", (req, res) => {});
// 39:01->
app.listen(3000,()=>{console.log("server running")});