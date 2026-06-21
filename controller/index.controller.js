const Model = require("../model/index.model");

class Controller {
  static async crear(datos) {
    const creado = await Model.crearOpinion(datos);
    return creado;
  }
}

module.exports = Controller;