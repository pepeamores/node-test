const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    nombre: String,
    tipo: String,
    descripcion: String
})

//Creamos el modelo
const Pokemon = mongoose.model('pokemon', pokemonSchema, "pokemon");

module.exports = Pokemon;
