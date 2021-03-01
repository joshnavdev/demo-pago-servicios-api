const md5 = require("md5");
const jwt = require("jsonwebtoken");

const hashSync = (data) => md5(data);

const checkPassword = (password, hash) => hash === md5(password);

const sign = (data) => jwt.sign(data, "privateKey");

module.exports = {
  hashSync,
  checkPassword,
  sign,
};
