const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'mentorize-frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'mentorize-frontend', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'mentorize-frontend', 'login.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'mentorize-frontend', 'cadastro.html'));
});

app.get('/sobrenos', (req, res) => {
  res.sendFile(path.join(__dirname, 'mentorize-frontend', 'sobrenos.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'mentorize-frontend', 'mentor.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'mentorize-frontend', 'aluno.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
