const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// cors initialized

const courses = require('./Data/Courses.json');


app.get('/', (req, res) => {
    res.send('my learning server running.')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course.id == id);
    res.send(courseDetails);
})


app.listen(port, () => {
    console.log(port);
})