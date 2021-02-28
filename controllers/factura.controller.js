const mongoose = require("mongoose");
const Factura = require("..//models//factura.model");
const Recibo = require("../models/recibo.model");
const Cuenta = require("../models/cuenta.model");

const createFactura = async (req, res) => {
  try {
    const { body } = req;
    const { cuenta_id } = body;
    const { recibo_id } = body;

    if (!mongoose.Types.ObjectId.isValid(recibo_id)) {
      return res.status(400).json({ mensaje: "ID invalido" });
    }

    const recibo = await Recibo.findById(recibo_id);

    // variable = true o false
    // if (variable === true) -> if (true === true) -> if (true) -> if (variable)

    if (recibo.pagado) {
      return res
        .status(403)
        .json({ mensaje: "El recibo ya se encuentra pagado" });
    }

    const cuenta = await Cuenta.findById(cuenta_id);

    if (cuenta.monto < recibo.monto) {
      return res.status(400).json({ mensaje: "Tas mision" });
    }

    recibo.pagado = true;
    cuenta.monto -= recibo.monto;
    await recibo.save();
    await cuenta.save();
    const nuevaFactura = await Factura.create({ cuenta_id, recibo_id });

    res.status(201).json(nuevaFactura);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createFactura };
