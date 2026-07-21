const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'CI/CD funcionando correctamente' , 
    nombre: 'Paul Moreno',
    servicio:'API Express desplegada en vercel'});
});

app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.status(200).json({ message: `¡Hola, ${nombre}!`,
  estado:'API disponible' });
});

app.get('/suma', (req, res) => {
  const numero1 = Number(req.query.numero1);
  const numero2 = Number(req.query.numero2);

  if(Number.isNaN(numero1) || Number.isNaN(numero2)){
    return res.status(400).json({
        error: 'Los parametros numero1 y numero 2  deben ser numericos'
    });
  }

  res.status(200).json({
      numero1,
      numero2,
      resultado: numero1 + numero2
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});