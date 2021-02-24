const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({
  nombre: { type: String, unique: true },
});

module.exports = mongoose.model("categorias_servicios", CategoriaSchema);
