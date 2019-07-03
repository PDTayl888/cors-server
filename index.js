const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Course } = require('./courses');
// const cors = require('cors');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
// app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

mongoose.connect('mongodb://localhost/playground',  { useNewUrlParser: true })
    .then(() => console.log("connected to mongodb"));

const dataArray = [
    { greeting: "shit is real funky yo!"},
    { greeting: "fart is real funky yo!"},
    { greeting: "poop is real funky yo!"},
    { greeting: "shit is real funky yo!"},
    { greeting: "shit is real funky yo!"}
]

app.get('/', (req, res, next) => {
    res.send(dataArray);
});
    
app.get('/api/courses', async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});
    
app.post('/api/courses', async (req, res) => {
    try {
            const course = new Course(req.body);
            const result = await course.save();
            res.send(result);
        }
    catch(error) {
            res.status(500).send(error);
        }
});
            