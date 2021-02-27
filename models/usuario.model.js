const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  nombres: { type: String },
  dni: { type: String, unique: true },
  password: String,
  email: String,
});

module.exports = mongoose.model("usuario", usuarioSchema);
