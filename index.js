// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.end("Hellow");
//   })
//   .listen(3001);

const express = require("express");
const json = require("express");

const app = express();
app.use(express.json());

const port = 3001;
app.listen(port);
const students = [];

// app.get(endpoint, callback);

app.get("/help", (req, res) => {
  res.send(`Hello from help! 
  APIs are 
  /big
  /greet`);
});

app.post("/students", function (req, res) {
  var student = req.body;
  students.push(student);
  res.send(students);
});

app.post("/test", (req, res) => {
  res.json({ body: req.body });
});

app.put("/students:id", (req, res) => {
  var id = req.body.id;
  var index = students.findIndex((student) => student.id == id);
  students[index] = req.body;
  res.send(students);
});
