const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importar o arquivo de rotas
const routes = require('./routes');

// Usar as rotas
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});