import { Router } from 'express';
import municipioController from '../controllers/municipio.controller';

const controllerMunicipio = new municipioController();
const municipioRoutes = Router();

municipioRoutes.post('/crear', controllerMunicipio.crearMunicipio);
//municipioRoutes.get('/listar', controllerMunicipio.listarMunicipio);

export default municipioRoutes;





