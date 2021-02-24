const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmpresaSchema = new Schema({
  nombre: String,
  categoria_servicio_id: {
    type: Schema.Types.ObjectId,
    ref: "categorias_servicios",
  },
});

module.exports = mongoose.model("empresas", EmpresaSchema);
