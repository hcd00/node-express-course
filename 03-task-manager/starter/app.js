const connectDB = require('./db/connect.js');
require('dotenv').config();
const notFound = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json())
//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`)); 
    } catch(e) {
        console.log(e);
    }
}

start()