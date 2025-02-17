const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas de tu API
app.get('/api/estudiantes', (req, res) => {
  // Lógica para obtener estudiantes
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});


