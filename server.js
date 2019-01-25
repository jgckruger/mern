const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Configuração do banco
const db = require('./config/keys').mongoURI;
console.log(db);

// Conexão com o MongoDB
mongoose
  .connect(db)
  .then(()=>console.log('MongoDB conectado!'))
  .catch(err => console.log(err));


// Prepara rotas da API
const items = require('./routes/api/items');
app.use('/api/items', items);

// Porta do HEROKU ou a padrão do Node.js
const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Servidor iniciado na porta ${port}`));
