const express = require("express");
const router = express.Router();

const controller = require("../controllers/produtos.controller");

router.get("/produtos", controller.listarProdutos);
router.post("/produtos", controller.cadastrarProduto);
router.put("/produtos/:id", controller.atualizarProduto);
router.delete("/produtos/:id", controller.excluirProduto);

module.exports = router;