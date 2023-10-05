const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/mentorize-frontend/index.html');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
