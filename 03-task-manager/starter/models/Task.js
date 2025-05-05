const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    //validation obj properties
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        maxlength: [20, 'Name can not be longer than 20 characters.']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)