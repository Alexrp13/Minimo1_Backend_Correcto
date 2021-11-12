const { findOneAndUpdate } = require("../models/Evento");
const Evento = require("../models/Evento");

exports.crearEvento = async (req, res) => {
    try {
        let evento; 

        //Creamos nuestro evento
        evento = new Evento(req.body);

        await evento.save(); 
        res.send(evento);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    console.log(req.body);
}

exports.obtenerEventos = async (req,res) => {
    try {
        const eventos = await Evento.find(); 
        res.json(eventos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarEventos = async (req,res) => {
    try {
        const { localizacion, fecha, latitud, longitud, descripcion} = req.body;
        let evento = await evento.findById(req.params.id);

        if(!evento) { 
            res.status(404).json({ msg: 'No existe el evento'})
        }
        evento.localizacion = localizacion; 
        evento.fecha = fecha; 
        evento.latitud = latitud;
        evento.longitud = longitud;
        evento.descripcion = descripcion;

        evento = await evento-findOneAndUpdate({ _id: req.params.id},evento, {new: true})
        res.json(evento);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
    exports.obtenerEvento = async (req,res) => {
        try {
            let evento = await evento.findById(req.params.id);
    
            if(!evento) { 
                res.status(404).json({ msg: 'No existe el evento'})
            }
            res.json(evento);
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }

    exports.eliminarEvento = async (req,res) => {
        try {
            let evento = await evento.findById(req.params.id);
    
            if(!evento) { 
                res.status(404).json({ msg: 'No existe el evento'})
            }
            await evento.findOneAndRemove({_id: req.params.id});
            res.json({ msg: 'evento eliminado con exito'});
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }

/* No he pogut acabar aquesta part, tot i aixi, hauria acabat emprat la funcioncio populate() de mongoose per tal de poder relacionar les coleccions y poder seleccionar les personas que han asistit a un event. 


