require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person")
const app = express();

morgan.token("object", function (req, res) {
  const body = req.body;
  const object = {
    name: body.name,
    number: body.number,
    id: body.id
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
app.use(express.static('build'));

app.get("/api/persons", (req, res) => {
  Person.find({})
    .then(persons => {
    res.json(persons.map(person => person.toJSON()))
  })
  .catch(error => {
    console.log(error)
    res.status(404).end()
  })
})

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
    res.status(204).json(person.toJSON())
  })
  .catch(error => {
    console.log(error)
    res.status(404).end()
  })
});

app.get("/info", (req, res) => {
  const date = new Date();
  Person.estimatedDocumentCount().then(response => {
    const html = `<p>Puhelinnumerotietokannassa on ${response} yhteystietoa</p>
                  <p>${date}</p>`
    res.send(html)
  }) 
});

app.delete("/api/persons/:id", (req, res) => {
  Person.findByIdAndRemove(req.params.id)
  .then(response => {
    console.log(response)
    res.json(response);
  })
  .catch(error => {
    console.log(error)
    res.status(404).end()
  })
});

app.post("/api/persons/", (req, res) => {
  const body = req.body;

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((response) => {
    console.log(
      `added ${response.name} number ${response.number} to phonebook`
    );
    res.json(response);
  });
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Example app listening on ${PORT} port!`));
