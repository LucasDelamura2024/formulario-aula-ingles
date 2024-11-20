const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '78delamura@gmail.com',
    pass: 'svhe pqar drdr pgco', // Substitua pela senha de app do Gmail
  },
});

// Função para criar e enviar o e-mail
async function sendEmail(data) {
  const { name, email, phone, startDate, anxietyLevel, level, observation } = data;

  // Garantindo que campos ausentes tenham valores padrão
  const emailBody = `
    <h2>Cadastro Realizado com Sucesso!</h2>
    <p>Detalhes do Cadastro:</p>
    <ul>
      <li><strong>Nome:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Telefone:</strong> ${phone}</li>
      <li><strong>Data de Início:</strong> ${startDate}</li>
      <li><strong>Nível de Ansiedade:</strong> ${anxietyLevel}</li>
      <li><strong>Nível de Inglês:</strong> ${level}</li>
      <li><strong>Observação:</strong> ${observation}</li>
    </ul>
  `};
  const mailOptions = {
    from: '78delamura@gmail.com',
    to: email,
    bcc: '78delamura@gmail.com',
    subject: `Confirmação de Cadastro - ${name || 'Aluno'}`,
    html: emailBody,
  };



// Endpoint para envio de e-mail
app.post('/send-email', async (req, res) => {
  const response = await sendEmail(req.body);
  if (response.success) {
    res.status(200).send(response.message);
  } else {
    res.status(500).send(response.message);
  }
});

// Inicializa o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
