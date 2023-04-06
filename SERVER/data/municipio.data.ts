import { MunicipioSchema } from "../models/municipios.model";
import { IRegistroMunicipio, IResponseData } from "../interface/municipio.interface";

export default class municipioData {

    public static async crearMunicipio(body: IRegistroMunicipio): Promise<IResponseData> {

        const response: IResponseData = {
            data: null,
            error: false
        }


        try {
            const municipio = new MunicipioSchema(body);
            response.data = await municipio.save();

        }catch(err) {
            response.error = true;
            response.data = err;

        }

        return response;

    }

    public static async listarMunicipio(): Promise<IResponseData> {
        const res: IResponseData = {
            data: null,
            error: false
        }

        try {

            res.data = await MunicipioSchema.find({});

        } catch(error) {
            res.error = true;
            res.data = error;
        }
        return res;
    }
}