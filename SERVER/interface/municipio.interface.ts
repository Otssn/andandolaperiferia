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