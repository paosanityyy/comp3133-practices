const  { Schema, model } = require('mongoose')

const StudentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
});

module.exports = model('Student', StudentSchema);