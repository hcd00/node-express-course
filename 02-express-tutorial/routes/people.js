const express = require("express");
const { addPerson, getPeople, getPerson, updatePerson, deletePerson } = require("../controllers/people.js");
const router = express.Router();

router.get('/', getPeople);
router.get('/:personID', getPerson);
router.post('/', addPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router