const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para entender JSON
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Criar ou conectar ao banco SQLite
const db = new sqlite3.Database("./usuarios.db", (err) => {
  if (err) console.error(err.message);
  else console.log("✅ Conectado ao banco SQLite");
});

// Criar tabela de usuários (se não existir)
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT
)`);

// Rota de cadastro
app.post("/cadastrar", async (req, res) => {
  const { nome, email, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);

  db.run(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, hash],
    function (err) {
      if (err) {
        return res.status(400).json({ erro: "Email já cadastrado!" });
      }
      res.json({ sucesso: true, id: this.lastID });
    }
  );
});

// Rota de login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  db.get("SELECT * FROM usuarios WHERE email = ?", [email], async (err, row) => {
    if (!row) return res.status(400).json({ erro: "Usuário não encontrado!" });

    const senhaCorreta = await bcrypt.compare(senha, row.senha);
    if (!senhaCorreta) return res.status(400).json({ erro: "Senha incorreta!" });

    return res.json({ sucesso: true, nome: row.nome });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
