import { model, Schema } from 'mongoose';
import mongoose from 'mongoose';
import { DateTime } from 'luxon';

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    usuario:{
        type: String,
        require: true
    },
    contraseña:{
        type: String,
        require: true
    },
    idPerfil:{
        type: Number,
        require: true
    }
});