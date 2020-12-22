const { Schema, model } = require('mongoose');

const UsuariosSchema = new Schema({
    nombre: String,
    correo: String,
    numeroTelefono: Number,
    edad: Number,
});

const usuario = new model('Usuarios', UsuariosSchema);
module.exports = usuario;