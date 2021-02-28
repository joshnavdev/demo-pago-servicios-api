const mongoose = require("mongoose");
const Factura = require("..//models//factura.model");

const createFactura = async (req, res) => {
  try {
    const { body } = req;
    const { cuenta_id } = body;
    const { recibo_id } = body;
    if (!mongoose.Types.ObjectId.isValid(recibo_id)) {
      return res.status(400).json({ mensaje: "ID invalido" });
    }
    const nuevaFactura = await Factura.create({ cuenta_id, recibo_id });

    res.status(201).json(nuevaFactura);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createFactura };
