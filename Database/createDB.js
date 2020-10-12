db = db.getSiblingDB('Fabrica');
db.createCollection("Dispositivos", { autoIndexId: true, capped : false } );
db.createCollection("Mediciones", { autoIndexId: true, capped : false } );
db.Dispositivos.insertMany([
/* 1 */
{    
    	"dispositivoId" : "1",
    	"nombre" : "Dispositivo 1",
    	"ubicacion" : "Taller mecánico",
    	"lat" : "-27.564355",
    	"long" : "-59.174151",
    	"sensores" : [
		{"sensorId": "1S1", "tipo" : "Temperatura", "activo" : "1", "ultimamedicion" : {"fecha" : "2020-08-01T10:15","valor" : 21}},
		{"sensorId": "1S2", "tipo" : "Humedad", "activo" : "1",  "ultimamedicion" : {"fecha" : "2020-08-01T10:31","valor" : 70.5}}
	],
},
/* 2 */
{    
    	"dispositivoId" : "2",
    	"nombre" : "Dispositivo 2",
    	"ubicacion" : "Oficinas bloque A",
    	"lat" : "-27.564355",
    	"long" : "-59.174151",
    	"sensores" : [
		{"sensorId": "2S1", "tipo" : "Temperatura", "activo" : "1", "ultimamedicion" : {"fecha" : "2020-08-05T10:45","valor" : 20.2}},
		{"sensorId": "2S2", "tipo" : "Humedad", "activo" : "1",  "ultimamedicion" : {"fecha" : "2020-08-05T11:47","valor" : 80}},
	],
},
/* 3 */
{    
    	"dispositivoId" : "3",
    	"nombre" : "Dispositivo 3",
    	"ubicacion" : "Control de calidad",
    	"lat" : "-27.564355",
    	"long" : "-59.174151",
    	"sensores" : [
		{"sensorId": "3S1", "tipo" : "Temperatura", "activo" : "1",  "ultimamedicion" : {"fecha" : "2020-08-01T10:05","valor" : 21}}
	]
},
/* 4 */
{    
    	"dispositivoId" : "4",
    	"nombre" : "Dispositivo 4",
    	"ubicacion" : "Sala de ajustes",
    	"lat" : "-27.564355",
    	"long" : "-59.174151",
    	"sensores" : [
		{"sensorId": "4S1", "tipo" : "Temperatura", "activo" : "1", "ultimamedicion" : {"fecha" : "2020-08-07T11:43","valor" : 20.6}},
		{"sensorId": "4S2", "tipo" : "Humedad", "activo" : "1", "ultimamedicion" : {"fecha" : "2020-08-07T12:41","valor" : 81}}
	]
},
/* 5 */
{    
    	"dispositivoId" : "5",
    	"nombre" : "Dispositivo 5",
    	"ubicacion" : "Estacionamiento",
    	"lat" : "-27.564355",
    	"long" : "-59.174151",
    	"sensores" : [
		{"sensorId": "5S1", "tipo" : "Humedad", "activo" : "1", "ultimamedicion" : {"fecha" : "2020-08-07T11:43","valor" : 81.2}}
	]
}
]);


/* ++++++++++++++++ Mediciones +++++++++++++++ */
/* ++ Dispositivo 1 ++ */
db.Mediciones.insertMany([ 
/* 1 */
{
    
    	"fecha" : "2020-07-10T07:10:01",
	"valor" : 18.3,
    	"dispositivoId" : "1",
	"sensorId" : "1S1",
	"tipo" : "Temperatura"

},
/* 2 */
{
    
    	"fecha" : "2020-07-10T07:10:51",
	"valor" : 81.9,
    	"dispositivoId" : "1",
	"sensorId" : "1S2",
	"tipo" : "Humedad"
},
/* 3 */
{
    
    	"fecha" : "2020-06-10T07:10:22",
	"valor" : 18.5,
    	"dispositivoId" : "1",
	"sensorId" : "1S1",
	"tipo" : "Temperatura"
},
/* 4 */
{
    
    	"fecha" : "2020-06-10T07:11:01",
	"valor" : 78.7,
    	"dispositivoId" : "1",
	"sensorId" : "1S2",
	"tipo" : "Humedad"
},
/* 5 */
{
    
    	"fecha" : "2020-05-10T07:12:01",
	"valor" : 17.3,
    	"dispositivoId" : "1",
	"sensorId" : "1S1",
	"tipo" : "Temperatura"
},
/* 6 */
{
    
    	"fecha" : "2020-05-10T07:12:43",
	"valor" : 83.9,
    	"dispositivoId" : "1",
	"sensorId" : "1S2",
	"tipo" : "Humedad"
},
/* ++ Dispositivo 2 ++ */
/* 7 */
{
    
    	"fecha" : "2020-06-10T07:08:21",
	"valor" : 18.5,
    	"dispositivoId" : "2",
	"sensorId" : "2S1",
	"tipo" : "Temperatura"
},
/* 8 */
{
    
    	"fecha" : "2020-06-10T07:10:13",
	"valor" : 78.7,
    	"dispositivoId" : "2",
	"sensorId" : "2S2",
	"tipo" : "Humedad"
},
/* 7 */
{
    
    	"fecha" : "2020-05-10T07:10:16",
	"valor" : 18.5,
    	"dispositivoId" : "2",
	"sensorId" : "2S1",
	"tipo" : "Temperatura"
},
/* 8 */
{
    
    	"fecha" : "2020-05-10T07:10:20",
	"valor" : 78.7,
    	"dispositivoId" : "2",
	"sensorId" : "2S2",
	"tipo" : "Humedad"
},
{
    
    	"fecha" : "2020-04-10T09:10:20",
	"valor" : 79.8,
    	"dispositivoId" : "2",
	"sensorId" : "2S2",
	"tipo" : "Humedad"
},
{
    
    	"fecha" : "2020-04-07T08:43:20",
	"valor" : 21.7,
    	"dispositivoId" : "2",
	"sensorId" : "2S2",
	"tipo" : "Temperatura"
},
{
    
    	"fecha" : "2020-03-07T08:02:20",
	"valor" : 19.4,
    	"dispositivoId" : "2",
	"sensorId" : "2S2",
	"tipo" : "Temperatura"
},
/* ++ Dispositivo 3 ++ */
/* 9 */
{
    
    	"fecha" : "2020-06-10T07:10:23",
	"valor" : 18.5,
    	"dispositivoId" : "3",
	"sensorId" : "3S1",
	"tipo" : "Humedad"
},
/* 10 */
{
    
    	"fecha" : "2020-05-10T07:10:24",
	"valor" : 19.2,
    	"dispositivoId" : "3",
	"sensorId" : "3S1",
	"tipo" : "Temperatura"
},
/* 11 */
{
    
    	"fecha" : "2020-04-10T07:10:54",
	"valor" : 18.3,
    	"dispositivoId" : "3",
	"sensorId" : "3S1",
	"tipo" : "Temperatura"
},
/* 12 */
{
    
    	"fecha" : "2020-05-10T07:10:01",
	"valor" : 18.5,
    	"dispositivoId" : "3",
	"sensorId" : "3S1",
	"tipo" : "Temperatura"
},
/* ++ Dispositivo 4 ++ */
/* 13 */
{
    
    	"fecha" : "2020-06-10T07:10:01",
	"valor" : 18.5,
    	"dispositivoId" : "4",
	"sensorId" : "4S1",
	"tipo" : "Temperatura"
},
/* 14 */
{
    
    	"fecha" : "2020-06-10T07:10:01",
	"valor" : 78.7,
    	"dispositivoId" : "4",
	"sensorId" : "4S2",
	"tipo" : "Humedad"
},
/* 15 */
{
    
    	"fecha" : "2020-05-10T07:10:01",
	"valor" : 18.5,
    	"dispositivoId" : "4",
	"sensorId" : "4S1",
	"tipo" : "Temperatura"
},
/* 16 */
{
    
    	"fecha" : "2020-05-10T07:10:01",
	"valor" : 78.7,
    	"dispositivoId" : "4",
	"sensorId" : "4S2",
	"tipo" : "Humedad"
}
]);