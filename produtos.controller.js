const db = require("../data/connection");

const listarProdutos = async (req, res) => {
    try {
        const produtos = await db.query("SELECT * FROM produtos");
        res.status(200).send(produtos[0]).end();
    } catch (erro) {
        res.status(500).send({ erro: "Erro ao listar produtos" }).end();
    }
};

const cadastrarProduto = async (req, res) => {
    try {
        const { nome, imagem, preco, categoria, marca } = req.body;

        await db.query(
            "INSERT INTO produtos (nome, imagem, preco, categoria, marca) VALUES (?, ?, ?, ?, ?)", [nome, imagem, preco, categoria, marca]
        );

        res.status(201).send({ message: "Produto cadastrado!" });
    } catch (erro) {
        res.status(500).send({ erro: "Erro ao cadastrar produto" });
    }
};

const atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, imagem, preco, categoria, marca } = req.body;

        await db.query(
            `UPDATE produtos 
             SET nome = ?, imagem = ?, preco = ?, categoria = ?, marca = ?
             WHERE id = ?`, [nome, imagem, preco, categoria, marca, id]
        );

        res.status(200).send({ message: "Produto atualizado!" });
    } catch (erro) {
        res.status(500).send({ erro: "Erro ao atualizar produto" });
    }
};

const excluirProduto = async (req, res) => {
    try {
        const { id } = req.params;

        await db.query(
            "DELETE FROM produtos WHERE id = ?", [id]
        );

        res.status(200).send({ message: "Produto excluído!" });
    } catch (erro) {
        res.status(500).send({ erro: "Erro ao excluir produto" });
    }
};

module.exports = {
    listarProdutos,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
};