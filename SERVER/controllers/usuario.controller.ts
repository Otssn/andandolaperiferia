import { IRegistroUsuario,IResponseData,IResponseRequest } from "../interface/usuario.interface";
import usuarioData from "../data/usuario.data";
import { Request, Response, NextFunction } from "express";

export default class usuarioController{
    public async crearUsuario(req: any, res: Response){
        
        const body: any  = req.body;
        console.log("req.body", body);

        const bodyRegistro: IRegistroUsuario = {
            nombre: body.nombre,
            correo: body.correo,
            usuario: body.usuario,
            contraseña: body.contraseña,
            idPerfil: body.idPerfil
        };

        const response: IResponseData = await usuarioData.crearUsuario(bodyRegistro);

        if(response.error){
            res.status(500).json(response);
        }else{
            res.status(200).json(response);
        }
    }
    public async listarUsuario(req: any,res: Response){
        const response: IResponseData = await usuarioData.listarUsuario();

        if(response.error){
            const responseRequest: IResponseRequest = {
                completada: false,
                error: true,
                mensaje: "Error al listar los usuarios",
                data: response.data
            }
            return res.status(500).json(responseRequest);
        }else{
            const responseRequest: IResponseRequest = {
                completada: true,
                error: false,
                mensaje: "Usuarios listados correctamente",
                data: response.data
            }

            return res.status(200).json(responseRequest);
        }
    }
}