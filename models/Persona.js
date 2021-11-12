const mongoose = require('mongoose'); 

const PersonaSchema = mongoose.Schema( {
    nombre: {
        type: String, 
        required: true
    },
    edad: {
        type: String, 
        required: true
    },
    dni: {
        type: Number, 
        required: true
    }
}); 

module.exports = mongoose.model('Persona', PersonaSchema);