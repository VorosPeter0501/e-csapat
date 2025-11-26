const mongoose = require('mongoose');
const telefonokSchema = new mongoose.Schema({

    telefon_id:{
        type: Number
    },
    tipus_nev: {
        required: true,
        type: String
    },
    megjelenes_ev: {
        required: true,
        type: Number
    },
    ar: {
        required: true,
        type: Number
    },
    marka_id: {
        required: true,
        type: Number
    }
})
module.exports = mongoose.model('Telefon', telefonokSchema, 'telefonok')




