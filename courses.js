const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    title: String
    }); 
    
const Course = mongoose.model('Course', courseSchema);




const shit = () => console.log('dankdankdank');


module.exports.Course = Course;
module.exports.shit = shit;
