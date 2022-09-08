const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    exerciseIds: {
        type: [''],
        // check embedded array sytanx
    },
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

const Group = mongoose.model('Group', groupSchema);

module.exports = Group