var express = require("express");
var router = express.Router();
var Controller = require("../controller/index.controller");

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("index");
});

router.post("/", async (req, res) => {
  try {
    const datosEnviados = req.body;
    const creado = await Controller.crear(datosEnviados);

    res.status(201).json({
      message: "Comentario creado exitosamente",
      data: creado,
    });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({
        error: err.error,
        detalle: err.detalle,
      });
    }
    res.status(500).json({
      error: "Ocurrio un error",
      detalle: err.message,
    });
  }
});

module.exports = router;
