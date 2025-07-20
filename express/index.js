import express from "express";
var users = [
  {
    name: "lakhan",
    kidney: [{ heathly: true, heathly: false }],
    metadata: [{ profilepice: "yes", pronouns: "he/him" }],
  },
];
// console.log(users[1])
var app = express();

app.get("/", (req, res) => {

});
app.put("/", (req, res) => {});
app.post("/", (req, res) => {});
app.delete("/", (req, res) => {});
// 39:01-> file:///C:/Users/HP/Downloads/Week%202.5%20-%20Express%20basics.mp4