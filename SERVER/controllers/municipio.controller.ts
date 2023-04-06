import { IRegistroMunicipio, IResponseData, IResponseRequest } from "../interface/municipio.interface"
import municipioData from "../data/municipio.data";
import { Request, Response, NextFunction } from "express";

export default class municipioController {

    public async crearMunicipio(req: any, res: Response){

        const body: any  = req.body; 
        console.log("req.body", body);

        const bodyRegistro: IRegistroMunicipio = {
            nombre: body.nombre,
            coordenadas: body.coordenadas
        };

        const response: IResponseData = await municipioData.crearMunicipio(bodyRegistro);

        if(response.error){
            res.status(500).json(response);
        }else{
            res.status(200).json(response);
        }

    }

    public async listarMunicipio(req: any, res: Response) {

        const response: IResponseData = await municipioData.listarMunicipio();

        if(response.error){

            const responseRequest: IResponseRequest = {
                completada: false,
                error: true,
                mensaje: "Error al listar los municipios",
                data: response.data
            }

            return res.status(500).json(responseRequest);
        } else {
                
                const responseRequest: IResponseRequest = {
                    completada: true,
                    error: false,
                    mensaje: "Municipios listados correctamente",
                    data: response.data
                }
    
                return res.status(200).json(responseRequest);
        }
    }
}