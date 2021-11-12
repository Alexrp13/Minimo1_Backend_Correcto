const mongoose = require('mongoose'); 

const EventoSchema = mongoose.Schema( {
    localizacion: {
        type: String, 
        required: true
    },
    fecha: {
        type: String, 
        required: true
    },
    latitud: {
        type: Number, 
        required: true
    },
    longitud: {
        type: Number, 
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
    /* 
    persona: { type: Schema.ObjectId, ref: "Persona"} 
    */


}); 

module.exports = mongoose.model('Evento', EventoSchema);