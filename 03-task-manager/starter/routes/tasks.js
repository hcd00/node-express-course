const express = require('express')
const router = express.Router();
const { getAllTasks, getTask, postTask, updateTask, deleteTask } = require('../controllers/tasks.js');

//routes
router.route('/').get(getAllTasks).post(postTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;