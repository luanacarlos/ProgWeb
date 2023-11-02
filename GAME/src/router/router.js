const express = require("express");
const mainController = require("../controllers/main");
const areaController = require("../controllers/area");
const cursoController = require("../controllers/curso");
const jogoController = require("../controllers/jogo");
const router = express.Router();

//Controlador Main
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/profs", mainController.profs);
router.get("/ui", mainController.ui);
router.get("/game", mainController.game);

//Controlador Curso
router.get("/curso", cursoController.index);
router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);
router.get("/curso/read/:id", cursoController.read);
router.get("/curso/update/:id", cursoController.update);
router.post("/curso/update/:id", cursoController.update);
router.get("/curso/remove/:id", cursoController.remove);

// Controlador Area
router.get("/area", areaController.index);

//rota do jogo
router.get('/jogo',                 jogoController.index);
router.get('/jogo/game',            jogoController.game);

module.exports = router;