export interface IRegistroMunicipio {
    nombre: string;
    coordenadas: [{
        lat: number;
        lng: number;
    }];
}

export interface IResponseData {
    data: any,
    error: boolean
}

export interface IResponseRequest {
    completada: boolean,
    error: boolean,
    mensaje: string,
    data: any
}