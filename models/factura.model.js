const mongoose = require("mongoose");
const { Schema } = mongoose;

const FacturaSchema = new Schema({
  fecha_pago: { type: Date, default: now() },
  cuenta_id: { type: Schema.Types.ObjectId, ref: "cuentas" },
  recibo_id: { type: Schema.Types.ObjectId, ref: "recibos" },
});
