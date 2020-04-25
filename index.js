const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

let persons = [
  {
    name: "Matti Virtanen",
    number: "041-123456",
    id: 1,
  },
  {
    name: "Toni Virtanen",
    number: "041-321456",
    id: 2,
  },
  {
    name: "Teppo Virtanen",
    number: "050-987456",
    id: 3,
  },
];

app.get("/api/persons", (req, res) => res.json(persons));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on ${port} port!`));
