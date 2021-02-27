const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReciboSchema = new Schema({
  codigo: String,
  monto: Number,
  fecha_expericion: Date,
  empresa_id: { type: Schema.Types.ObjectId, ref: "empresas" },
  factura_id: { type: Schema.Types.ObjectId, ref: "facturas", default: null },
});

module.exports = mongoose.model("recibos", ReciboSchema);
