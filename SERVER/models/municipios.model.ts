import { model, Schema } from 'mongoose';
import mongoose from 'mongoose';
import { DateTime } from 'luxon';


const municipioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    coordenadas: [{
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }]
},{ timestamps: { currentTime: () => DateTime.local().toUTC().toMillis() } });


export const MunicipioSchema = model('Municipio', municipioSchema);
