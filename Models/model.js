const mongoose = require('mongoose');
const markakSchema = new mongoose.Schema({
        
    marka_nev: {
        required: true,
        type: String
    },
    orszag: {
        required: true,
        type: String
    },
    alapitas_eve: {
        required: true,
        type: Number
    }
})
module.exports = mongoose.model('markak', markakSchema)




