const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    exerciseIds: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise'
        }],
        // check embedded array sytanx
    },
    name: {
        type: String,
    }
    
})

const Group = mongoose.model('Group', groupSchema);

module.exports = Group