const mongoose = require("mongoose");
const recibo = require("../models/recibo.model");

const listRecibos = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ mensaje: "No se encontro empresa con ese ID" });
    }

    const recibos = await recibo
      .find({ empresa_id: id })
      .populate("factura_id");

    return res.json(recibos);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { listRecibos };
