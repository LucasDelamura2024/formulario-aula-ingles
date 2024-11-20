const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importando o pacote CORS

const app = express();
const port = 5500;

// Configuração do CORS para permitir requisições de qualquer origem
app.use(cors());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Se for usar o Gmail
  auth: {
    user: '78delamura@gmail.com', // Substitua pelo seu e-mail
    pass: 'lucas0909@@' // Substitua pela senha do seu e-mail ou senha de app do Google
  }
});

// Configuração do Body-Parser para ler o corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para enviar o e-mail
app.post('/send-email', (req, res) => {
  const { name, email, phone, studiedBefore, startDate, anxietyLevel, level, observation } = req.body;

  const mailOptions = {
    from: '78delamura@gmail.com', // O e-mail de envio
    to: '78delamura@gmail.com', // O e-mail para onde vai ser enviado
    subject: 'Novo Cadastro - USP Turma 242',
    html: `
      <h3>Detalhes do Cadastro:</h3>
      <ul>
        <li><strong>Nome:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Telefone:</strong> ${phone}</li>
        <li><strong>Já estudou Inglês?</strong> ${studiedBefore}</li>
        <li><strong>Data de Início:</strong> ${startDate}</li>
        <li><strong>Nível de Ansiedade:</strong> ${anxietyLevel}</li>
        <li><strong>Nível de Inglês:</strong> ${level}</li>
        <li><strong>Observação:</strong> ${observation}</li>
      </ul>
    `
  };

  // Enviar e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erro ao enviar o e-mail.');
    }
    res.status(200).send('E-mail enviado com sucesso!');
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
