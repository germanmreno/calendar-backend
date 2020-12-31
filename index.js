const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//Servidor de express
const app = express();

//Database
dbConnection();

//CORS
app.use(cors());

//Directorio público
app.use(express.static('public'));

//Lecutra y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
