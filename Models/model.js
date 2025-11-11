const mongoose = require('mongoose');
const markak_202511101237Schema = new mongoose.Schema({
    _id:{
        type: Number
    },    
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
module.exports = mongoose.model('markak_202511101237', markak_202511101237Schema)
