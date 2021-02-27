const Cuenta = require("..//models//cuenta.model");

const listcuenta = async (req, res) => {
  try {
    const { id } = req.params;

    const cuentas = await Cuenta.find({ usuario_id: id });

    res.json(cuentas);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listcuenta,
};
