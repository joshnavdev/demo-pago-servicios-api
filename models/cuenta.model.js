const mongoose = require("mongoose");
const { Schema } = mongoose;

const cuentaSchema = new Schema({
  numero: { type: String, unique: true },
  tipo: String,
  monto: String,
  usuario_id: {
    type: Schema.Types.ObjectId,
    ref: "usuarios",
  },
});

module.exports = mongoose.model("cuentas", cuentaSchema);
