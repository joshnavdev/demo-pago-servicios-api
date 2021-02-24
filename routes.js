const express = require("express");
const router = express.Router();

const categoria = require("./controllers/categoria.controller");

// configuramos el router
router.get("/", (req, res) => {
  // req - consulta
  // res - respuesta

  res.status(200).json({ mensaje: "Bienvenido!!" });
});

router.get("/categorias", categoria.list);
router.post("/categorias", categoria.create);
router.get("/categorias/:id/empresas", categoria.listEmpresas);

// exportamos
module.exports = router;
