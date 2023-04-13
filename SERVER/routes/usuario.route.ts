import { Router } from "express";
import municipioController from "../controllers/municipio.controller";
import usuarioController from "../controllers/usuario.controller";

const controllerMunicipio = new usuarioController();
const usuarioRoutes = Router();

usuarioRoutes.post('/crear',  controllerMunicipio.crearUsuario);
usuarioRoutes.get('/listar',  controllerMunicipio.listarUsuario);

export default usuarioRoutes;
