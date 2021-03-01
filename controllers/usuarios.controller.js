const Usuarios = require("../models/usuario.model");
const encrypt = require("../utils/encrypt");

const listUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.find();
    res.json(usuario);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { dni, password } = req.body;
    const usuario = (await Usuarios.findOne({ dni }).lean()) || {};

    if (!encrypt.checkPassword(password, usuario.password)) {
      return res.status(400).json({ mensaje: "Password incorrecto" });
    }

    const token = encrypt.sign(usuario);

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { listUsuario, login };
