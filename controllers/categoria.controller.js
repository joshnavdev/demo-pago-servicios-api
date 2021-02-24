const Categoria = require("../models/categoria.model");
const Empresa = require("../models/empresa.model");

const list = async (req, res) => {
  try {
    const categorias = await Categoria.find();

    res.json(categorias);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    // const body = req.body;
    const { body } = req;
    const { nombre } = body;

    // // Forma con instaciamiento
    // const nuevaCategoria = new Categoria({ nombre });

    // await nuevaCategoria.save();

    const nuevaCategoria = await Categoria.create({ nombre });

    res.status(201).json(nuevaCategoria);
  } catch (error) {
    console.log(error);
  }
};

const listEmpresas = async (req, res) => {
  try {
    const { id } = req.params;

    // const categoria = await Categoria.findById(id);

    // const empresa = await Empresa.create({
    //   nombre: "Calidda",
    //   categoria_servicio_id: id,
    // });

    // TODO: REVISAR POPULATE
    const empresas = await Empresa.find({ categoria_servicio_id: id });

    res.json(empresas);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  list,
  create,
  listEmpresas,
};
