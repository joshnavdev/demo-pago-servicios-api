const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReciboSchema = new Schema({
  codigo: String,
  monto: Number,
  fecha_expericion: Date,
  pagado: { type: Boolean, default: false },
  empresa_id: { type: Schema.Types.ObjectId, ref: "empresas" },
});

module.exports = mongoose.model("recibos", ReciboSchema);
