export class UltimaMedicion {
    fecha: string;    
    valor: number;
}

export class Sensor {
    sensorId: string;
    tipo: string;
    activo: number;
    ultimamedicion: UltimaMedicion;
}

export class DispositivoItem {
    _id: string;
    dispositivoId: number;
    nombre: string;
    ubicacion: string;
    sensores: Sensor[];   
}