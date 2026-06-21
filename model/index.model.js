const util = require("util");
const db = require("../connection/connection");

const query = util.promisify(db.query).bind(db);

class Modelo {
  static async crearOpinion(datos) {
    try {
      const sql = "INSERT INTO `opiniones-usuarios` SET ?";
      await query(sql, datos);

      return 'Se creó correctamente el comentario';
    } catch (error) {
      throw new Error(`Error al crear el comentario: ${error.message}`);
    }
  }
}

module.exports = Modelo;