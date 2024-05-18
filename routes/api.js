const express = require('express');
const router = express.Router();

// Rota para obter dados
router.get('/data', (req, res) => {
  const data = { message: 'Oi, sou o resultado!' };
  res.json(data);
});

module.exports = router;