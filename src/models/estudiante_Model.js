const mongoose = require('mongoose');

const estudiantSchema = mongoose.Schema({
    nombres:{
        type: String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    },
    correo:{
        type: String,
        required:true
    },
    institucion:{
        type: String,
        required:true
    },
});

module.exports = mongoose.model('estudiante',estudiantSchema);