import { UsuarioSchema } from '../models/usuarios.model';
import { IRegistroUsuario, IResponseData } from '../interface/usuario.interface';

export default class usuarioData{
    public static async crearUsuario(body: IRegistroUsuario): Promise<IResponseData>{
        const response: IResponseData = {
            data: null,
            error: false
        }
        try{
            const usuario = new UsuarioSchema(body);
            response.data = await usuario.save();
        }catch(err){
            response.error = true;
            response.data = err;
        }
        return response;
    }
    public static async listarUsuario(): Promise<IResponseData>{
        const res: IResponseData = {
            data: null,
            error: false
        }
        try {
            res.data = await UsuarioSchema.find({});
        } catch (error) {
            res.data = error;
            res.error = true;
        }
        return res;
    } 
}

