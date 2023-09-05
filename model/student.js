const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    Name: String,
    Maths:Number,
    Science:Number,
    English:Number,
    Hindi:Number,
    Gujrati:Number

});
const STUDENT = mongoose.model('student',studentSchema );

module.exports = STUDENT;