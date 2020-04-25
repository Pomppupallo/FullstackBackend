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

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    const date = new Date();
    res.send(
        `<p>Phonebook has info for ${persons.length} people</p>
         <p> ${date} </p>`
    )
})

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.post("/api/persons/", (req, res) => {
    const body = req.body;
    const newId = Math.floor(Math.random() * 500);

    const person = {
        name: body.name,
        number: body.number,
        id: newId
    }

    persons = persons.concat(person);

    res.json(person);
})

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
