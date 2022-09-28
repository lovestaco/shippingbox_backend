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

app.get("/", (req, res) => {
  res.send(`Hello from help!`);
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/students/", (req, res) => {
  res.send(students);
});

app.post("/students", function (req, res) {
  var student = req.body;
  students.push(student);
  res.send(students);
});

app.put("/students:id", (req, res) => {
  var id = req.body.id;
  var index = students.findIndex((student) => student.id == id);
  students[index] = req.body;
  res.send(students);
});

app.delete("/products/:id", (req, res) => {
  try {
    const { id } = req.params.id;
    var index = students.findIndex((student) => student.id == id);
    students.splice(index, 1);
    res.send(`Delete record with id ${id}`);
  } catch (e) {
    res.send(e, id, index);
  }
});
