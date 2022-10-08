import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 3001;
import { insertToMongo, listDatabases } from "./db.js";
app.use(express.json());
app.use(bodyParser.json());
app.listen(port);
app.use(cors());

const students = [];

app.get("/", (req, res) => {
  res.send(`Hello from help!`);
});

app.get("/students/", (req, res) => {
  res.send(students);
});

app.post("/students", function (req, res) {
  var student = req.body;
  var dbResponse = insertToMongo(student);
  res.send(dbResponse);
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
