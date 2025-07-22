import express from "express";
var users = [
  {
    name: "lakhan",
    kidney: [{ healthy: true }, { healthy: false }, { healthy: true }],
    metadata: [{ pronouns: "he/him" }],
  },
];
// console.log(users[1])
var app = express();
app.use(express.json());

// things thast we send -> popular parameter is Queryparameter

app.get("/", (req, res) => {
  var totalKidney = users[0].kidney.length;
  var truekid = users[0].kidney.filter((k) => k.healthy === true).length;
  var falsekid = users[0].kidney.filter((k) => k.healthy === false).length;
  var metadata = users[0].metadata;
  const op = [
    { "unhealthy": falsekid },
    { "healthy": truekid },
    { "total kidney": totalKidney },
    { metadata: metadata },
  ];
  res.send(op);
});
//body for post
app.post("/", (req, res) => {
  const ishealthy = req.body.ishealthy;
  users[0].kidney.push({ healthy: ishealthy });
  res.json({ msg: "Done" });
});
// replacing the parametr by changing it to healthy
app.put("/", (req, res) => {
  for (var i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].healthy = true;
  }
  res.json("hus kys");
});
app.delete("/", (req, res) => {
//  for (var i = 0; i < users[0].kidney.length; i++) {

   {users[0].kidney=users[0].kidney.filter(k=> k.healthy===false);}
  res.json("done deleteing");

});
// 39:01->

app.listen(3000, () => {
  console.log("server running");
});

