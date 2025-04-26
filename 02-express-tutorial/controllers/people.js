const { people } = require('../data.js');

const addPerson = (req, res) => {
    if (!req) {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
    else {
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    }
}

const getPeople = (req, res) => {
    res.json(people);
}

const getPerson = (req, res) => {
    const id = parseInt(req.params.personID);
    const person = people.find((p) => p.id === id);
    if (!person) {
        return res.status(404).json({ message: "That id did not match." })
    }
    res.json(person);
}

const updatePerson = (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body;
    const person = people.find((p) => p.id == id);
    if (!person) {
        return res.status(404).json({ message: `Id: ${id} was not found.` })
    }
    const newPerson = people.map((p) => {
        if (person.id === id) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPerson})
}

const deletePerson = (req, res) => {
    const id = parseInt(req.params.id)
    const person = people.find((p) => p.id === id);
    if (!person) {
        return res.status(404).json({ message: `Id: ${id} was not found.` })
    }
    const newPeople = people.filter((p) => p.id !== id);
    res.status(200).json({ success: true, data: newPeople})
}
module.exports = { addPerson, getPeople, getPerson, updatePerson, deletePerson }