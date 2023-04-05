//Importamos expresss
import express from 'express';
import cors from 'cors';
import mongoose, {ConnectOptions} from 'mongoose';

//Inicializo el exprres

const app = express();
app.use(cors());

const conf: any = {
    MONGO_URI:  'mongodb://127.0.0.1:27017/periferia',
    PORT: +process.env.PORT!
}


mongoose.connect(conf.MONGO_URI)
    .then(() => console.log('Conectado a la base de datos'));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});