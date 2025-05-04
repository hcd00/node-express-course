const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomErr} = require('../errors/custom-error')
//GET all
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks, totalTasks: tasks.length })
})

//GET single
const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        return next(createCustomErr(`No task with id : ${taskID}`, 404));
    }
    res.status(200).json({ task })
})

//POST task
const postTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })

})

//UPDATE task
const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomErr(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task });
})

//Delete Task
const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomErr(`No task with id : ${taskID}`, 404))
    }
    //custom response
    res.status(200).json({ task: null, status: 'success' })
})
module.exports = {
    getAllTasks,
    getTask,
    postTask,
    updateTask,
    deleteTask
}