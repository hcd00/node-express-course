const Task = require('../models/Task')


//GET all
const getAllTasks = (req,res) => { 
    res.send("all tasks.");
}
//GET single
const getTask = (req, res) => {
    res.json(req.params.id)
}
//POST task
const postTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task});
}

//UPDATE task
const updateTask = (req, res) => {
    res.send("Update task.");
}

//Delete Task
const deleteTask = (req, res) => {
    res.send("Delete Task.");
}
module.exports = {
    getAllTasks,
    getTask,
    postTask,
    updateTask,
    deleteTask
}