'use strict';

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongodb, (err, res) => {
    if (err){
        return console.log(`Error al conectar con base de datos: ${err}`);
    };

    console.log("\nConexion a base de datos establecida...\n");

    app.listen(config.port, () => {
        console.log(`Servidor ejecutandose en el puerto: ${config.port}\n`);
    });
});
