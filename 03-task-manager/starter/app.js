const connectDB = require('./db/connect.js');
require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const port = 3000;

// Middleware
app.use(express.json())
//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`)); 
    } catch(e) {
        console.log(e);
    }
}

start()