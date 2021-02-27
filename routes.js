const express = require("express");
const router = express.Router();

const categoria = require("./controllers/categoria.controller");
const usuario = require("./controllers/usuarios.controller");
const cuenta = require("./controllers/cuenta.controller");

// configuramos el router
router.get("/", (req, res) => {
  // req - consulta
  // res - respuesta

  res.status(200).json({ mensaje: "Bienvenido!!" });
});

router.get("/categorias", categoria.list);
router.post("/categorias", categoria.create);
router.get("/categorias/:id/empresas", categoria.listEmpresas);
router.get("/usuarios", usuario.listUsuario);
router.get("/usuarios/:id/cuentas", cuenta.listcuenta);

// exportamos
module.exports = router;
