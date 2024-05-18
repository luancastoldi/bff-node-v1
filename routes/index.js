const express = require('express');
const path = require('path');
const router = express.Router();

let raiz = 'views'
let file = 'index.html'

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// Rota para a página inicial
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', raiz, 'home', file));
});

// Rota para a página "Sobre Nós"
router.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, '..', raiz, 'sobre', file));
});

// Rota curinga para Not Found
router.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', raiz, '404', file));
  });

module.exports = router;    