export interface IRegistroUsuario{
    nombre: string;
    correo: string;
    usuario: string;
    contraseña: string;
    idPerfil: number;
}

export interface IResponseData{
    data: any,
    error: boolean
}

export interface IResponseRequest{
    completada: boolean,
    error: boolean,
    mensaje: string,
    data: any    
}