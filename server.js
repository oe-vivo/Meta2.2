// Importa el módulo 'express' para crear una aplicación web.
const express = require("express");
const app = express();
const passport = require('passport');
require('./passport');
 // Asume que passport.js está en la raíz del proyecto
app.use(passport.initialize());
// Importa el módulo 'fs' (File System) para trabajar con archivos en el sistema.
const fs = require("fs");

// Importa el módulo 'https' para crear un servidor HTTPS.
const https = require("https");

// Establece el puerto en el que el servidor escuchará las solicitudes.
process.env.port = 4001;

// Lee la llave privada desde un archivo llamado "private.key".
const llavePrivada = fs.readFileSync("private.key");

// Lee el certificado desde un archivo llamado "certificate.crt".
const certificado = fs.readFileSync("certificate.crt");

// Define un objeto 'credenciales' que contiene la llave privada, el certificado y la contraseña asociada a la llave privada.
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "ovr1520!" // Contraseña de la llave privada utilizada en la creación del certificado
};

// Crea un servidor HTTPS utilizando las credenciales y la aplicación 'app'.
const httpsServer = https.createServer(credenciales, app);

// Inicia el servidor HTTPS y lo hace escuchar en el puerto definido.
httpsServer.listen(process.env.port, () => {
    console.log('Servidor https escuchando por el puerto:', process.env.port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    // Lógica post autenticación
});

// Define una ruta GET para el directorio raíz '/'.
app.get('/', function (req, res) {
    // Envía una respuesta de texto al cliente cuando se accede a la ruta raíz.
    res.send("Hola, esta es la página principal.");
    console.log('Petición tipo GET recibida');
});




