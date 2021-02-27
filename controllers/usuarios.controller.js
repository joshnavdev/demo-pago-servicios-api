const Usuarios = require("../models/usuario.model");

const listUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.find();
    res.json(usuario);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { listUsuario };
