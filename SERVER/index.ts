//Importamos expresss
import express, {RequestHandler} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, {ConnectOptions} from 'mongoose';
import { connection } from './connections/conectionDB';
import municipioRoutes from './routes/municipio.route';


//Inicializo el exprres

const app = express();
app.use(cors());

// Body parser
app.use(bodyParser.urlencoded({ limit: '10000kb', extended: true }) as RequestHandler);
app.use(bodyParser.json({ limit: '10000kb' }) as RequestHandler);
app.use('/municipio', municipioRoutes);



connection.then((db) => {
    console.log('Base de datos conectada');
}).catch((err) => {});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});