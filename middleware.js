const jwt = require('jsonwebtoken');
const bearerHeader = req.headers['authorization'];
if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
} else {
    res.sendStatus(403);
}

const verificarToken = (req, res, next) => {
    // Obtener el token del encabezado de autorización
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send({ error: "Acceso denegado. Se requiere un token." });
    }

    try {
        // Verificar el token
        const verificado = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verificado; // Agregar datos de usuario a la solicitud
        next(); // Pasar al siguiente middleware o ruta
    } catch (error) {
        // En caso de error en la verificación del token
        res.status(400).send({ error: "Token inválido" });
    }
};

module.exports = verificarToken;
