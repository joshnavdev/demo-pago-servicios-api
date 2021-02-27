const mongoose = require("mongoose");
const recibo = require("../models/recibo.model");

const listRecibos = async (req, res) => {
  try {
    const { codigo, pagado } = req.query;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ mensaje: "No se encontro empresa con ese ID" });
    }
    const query = { empresa_id: id };

    if (codigo) {
      console.log(codigo);
      query.codigo = codigo;
    }

    const recibos = await recibo.find(query).populate("factura_id");

    // const response = recibos.map((recibo) => {
    //   return {
    //     ...recibo._doc,
    //     paid: recibo.factura_id !== null,
    //   };
    // });

    return res.json(response);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { listRecibos };
