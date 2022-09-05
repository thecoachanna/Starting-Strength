// allows us to create models and schemas
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    name: {
        type: String,
        
    },
    video: {
        type: String,
        
    },   
    cues: {
        type: String,
    },
    
})

module.exports = mongoose.model('Exercise', exerciseSchema);