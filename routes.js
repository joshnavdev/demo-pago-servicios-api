const express = require("express");
const router = express.Router();

const categoria = require("./controllers/categoria.controller");
<<<<<<< HEAD
const empresa = require("./controllers/empresa.controller");
=======
const usuario = require("./controllers/usuarios.controller");
const cuenta = require("./controllers/cuenta.controller");
>>>>>>> e1614f5084d2046b8a4c4a2becc479fd2c1fe07d

// configuramos el router
router.get("/", (req, res) => {
  // req - consulta
  // res - respuesta

  res.status(200).json({ mensaje: "Bienvenido!!" });
});

router.get("/categorias", categoria.list);
router.post("/categorias", categoria.create);
router.get("/categorias/:id/empresas", categoria.listEmpresas);
<<<<<<< HEAD
router.get("/empresas/:id/recibos", empresa.listRecibos);
=======
router.get("/usuarios", usuario.listUsuario);
router.get("/usuarios/:id/cuentas", cuenta.listcuenta);
>>>>>>> e1614f5084d2046b8a4c4a2becc479fd2c1fe07d

// exportamos
module.exports = router;
