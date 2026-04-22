const express = require("express");
const cors = require("cors");

const produtosRoutes = require("./src/routes/produtos.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use(produtosRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});