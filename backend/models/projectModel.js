const mongoose = require('mongoose');
const { Schema } = mongoose;

//project schema
const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    person: {
        type: String,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)

