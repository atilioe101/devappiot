# devappiot
Aplicación full-stack web para el monitoreo y gestión de sensores de temperatura instalados en campo.

![status](https://img.shields.io/badge/status-running-green.svg?colorB=00C106) ![readme](https://img.shields.io/badge/readme-OK-green.svg?colorB=00C106) ![database](https://img.shields.io/badge/database-OK-green.svg?colorB=00C106) ![commits](https://img.shields.io/badge/commits-3-blue.svg)  

## Autor
Atilio Cesar Errecaborde

## Estructura del proyecto
La estructura de carpetas del proyecto está organizada de la siguiente manera:

  **Database** > script para crear la base de datos desde el shell de mongoDB
  
  **WebApp** > aplicación en Angular
  
  **WebAPI** > aplicación MVC en nodejs
  
  **OnlineApp** > script para crear flow en node-red


## Funcionalidades y características requeridas

1. Servidor MQTT

    - [X] Servidor MQTT Mosquitto local

2. Aplicación on-line para el almacenamiento de los datos

    - [X] Aplicación node-red que se suscriba al servidor MQTT para capturar los
          mensajes del dispositivo IoT y almacenarlos en la base de datos.

3. Aplicación Web

    - [X]  CRUD de dispositivos  
    - [X]  Visualización en lista de las mediciones
    - [X]  Visualización en gráficos de las mediciones
    - [ ]  Envío de comandos en forma remota.  

## Arquitectura del proyecto

![](https://github.com/atilioe101/devappiot/blob/develop/arquitectura.png)


## Instalación

  1) Ejecutar el script en el shell de mongo para crear la base de datos [`crearDB.js`](https://github.com/atilioe101/devappiot/blob/develop/Database/createDB.js)

            Nombre de la base de datos creada: Fabrica
            Colecciones: Dispositivos y Mediciones

  2) Descargar la carpeta WebAPI. Ubicado en la raiz, ejecutar los siguientes comandos desde el shell del SO:

                a) npm install
                b) node index.js
        
        
        Verificar que el servicio está disponible en http://localhost:3001


        En el archivo [`mongo/index.js`](https://github.com/atilioe101/devappiot/blob/develop/WebAPI/mongo/index.js) se encuentra la configuración para la conexión a la base de datos instalada en el servicio MongoDB.
        En el encabezado del archivo se encuentras las constantes con los parámetro de conexión:
        
        const url = 'mongodb://localhost:27017';
        const dbName = 'Fabrica';
        
  
  3) Descargar la carpeta WebApp. Ubicado en la raiz, ejecutar los siguientes comandos desde el shell del SO:

                a) npm install
                b) ng serve --port 80 --open                
        
        Si se modifico la configuración del servicio WebAPI se deberá actualizar el archivo con la configuración del entorno.        
        [`environment.ts`](https://github.com/atilioe101/devappiot/blob/develop/WebApp/src/environments/environment.ts) 
        
  4) Ingresar a node-red y en la opción Importación del menur abrir el archivo [`createflow_nodered.json`](https://github.com/atilioe101/devappiot/blob/develop/OnlineApp/createflow_nodered.json) 
