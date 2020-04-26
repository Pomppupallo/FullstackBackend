const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3001;

morgan.token("object", function (req, res) {
  const body = req.body;
  console.log(body);
  const object = {
    name: body.name,
    number: body.number,
    id: body.id,
  };
  return JSON.stringify(object);
});

app.use(express.json());
app.use(cors());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :object"
  )
);

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

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p>
         <p> ${date} </p>`
  );
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons/", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number is missing",
    });
  }

  const names = persons.map((person) => person.name);

  if (names.includes(body.name)) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }

  const newId = Math.floor(Math.random() * 500);

  const person = {
    name: body.name,
    number: body.number,
    id: newId,
  };

  persons = persons.concat(person);

  res.json(person);
});

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
