const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    nombres: {
      type: String,
    },
    apellidos: {
        type: String,
    },
    email: {
      type: String,
    },
    telefono: {
      type: Number,
    },
    asunto: {
        type: String,
    },
    mensaje: {
    type: String,
    },
    fecha: {
    type: String,
    }
  },
  {
    collection: "msgContact",
  }
);

module.exports = mongoose.model("msgContact", productSchema); 