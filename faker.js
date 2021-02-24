const mongoose = require("mongoose");
const faker = require("faker");
const fs = require("fs");

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const createId = () => ({
  $oid: mongoose.Types.ObjectId(),
});

const getDateFromNow = (months) => {
  const date = new Date();
  date.setDate(date.getDate() + months * 30);
  return date.toISOString();
};

const writeJSON = (data, name) => {
  return new Promise((resolve, reject) => {
    const stringData = JSON.stringify(data);
    fs.writeFile(`./jsons/${name}.json`, stringData, (err) => {
      if (err) {
        reject();
      }
      resolve();
    });
  });
};

exports.createData = async (req, res) => {
  faker.seed(133);

  const categorias = ["Luz", "Agua", "Telefono", "Cable", "Gas", "Internet"];

  const categoriasDB = categorias.map((categoria) => ({
    _id: createId(),
    nombre: categoria,
  }));

  const empresasDB = [];

  categoriasDB.forEach((categoria) => {
    const number = faker.random.number({ min: 3, max: 7 });
    Array.from({ length: number }, () => {
      const empresa = {
        _id: createId(),
        nombre: faker.company.companyName(),
        categoria_servicio_id: categoria._id,
      };

      empresasDB.push(empresa);
    });
  });

  const recibosDB = [];

  empresasDB.forEach((empresa) => {
    const number = faker.random.number({ min: 5, max: 8 });
    const format = Array.from({ length: number }).reduce(
      (old = "#") => old + "#"
    );

    Array.from({ length: number }).forEach((_, idx) => {
      const codigo = faker.phone.phoneNumber(format);

      const recibo = {
        _id: createId(),
        codigo,
        monto: faker.random.float({ min: 100, max: 1000, precision: 0.01 }),
        fecha_expiracion: getDateFromNow(idx * -1),
        empresa_id: empresa._id,
      };

      recibosDB.push(recibo);
    });
  });

  const usuariosDB = Array.from({ length: 10 }).map(() => ({
    _id: createId(),
    nombres: `${faker.name.findName()} ${faker.name.lastName()}`,
    dni: faker.phone.phoneNumber("########"),
    password: faker.internet.password(),
    email: faker.internet.email(),
  }));

  const cuentasDB = [];

  usuariosDB.forEach((usuario) => {
    const number = faker.random.number({ min: 1, max: 3 });
    Array.from({ length: number }).map(() => {
      const cuenta = {
        _id: createId(),
        numero: faker.finance.account(),
        tipo: ["CORRIENTE", "SUELDO", "GANADORA"].sample(),
        monto: faker.random.float({ min: 100, max: 30000, precision: 0.01 }),
        usuario_id: usuario._id,
      };

      cuentasDB.push(cuenta);
    });
  });

  await writeJSON(categoriasDB, "categorias");
  await writeJSON(empresasDB, "empresas");
  await writeJSON(recibosDB, "recibos");
  await writeJSON(usuariosDB, "usuarios");
  await writeJSON(cuentasDB, "cuentas");

  res.json(categoriasDB);
};
