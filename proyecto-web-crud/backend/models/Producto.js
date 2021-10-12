const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    unidades: {
        type: Number,
    },
    precio_compra: {
      type: Number,
    },
    precio_venta: {
      type: Number,
    },
    detalle: {
        type: String,
    },
    categoria: {
    type: String,
    },
    imagen: {
      type: String,
    }
  },
  {
    collection: "inventario",
  }
);

module.exports = mongoose.model("inventario", productSchema);