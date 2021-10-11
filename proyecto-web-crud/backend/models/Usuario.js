const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    email: {
        type: String,
    },
    password:{
        type: String,
    },
    telefono: {
        type: Number,
    },
    pais: {
        type: String,
    },
    ciudad: {
        type: String,
    },
    direccion: {
        type: String,
    },
    clasificacion: {
        type: String,
    }
}, 
{
    collection: "perfiles",
});

module.exports = mongoose.model("perfiles", productSchema);