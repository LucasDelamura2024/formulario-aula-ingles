const scriptURL = 'https://script.google.com/macros/s/AKfycbyb8fBCmJuls-Ig3dWq8rJtnm6nSAZL3gR-09vduB7MZ4A-5BrdivhgRjU6LQKawbUO/exec';
const form = document.getElementById('studentForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('Formulário enviado com sucesso!'))
    .catch(error => console.error('Erro!', error.message));
});



  function updateAnxietyValue() {
    document.getElementById('anxietyValue').textContent = document.getElementById('anxietyLevel').value;
  }

  // Define valor padrão
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('anxietyValue').textContent = document.getElementById('anxietyLevel').value;
  });


  document.getElementById('whatsAppButton').addEventListener('click', function() {
    const name = document.getElementById('userName').value.trim();
    if (name === '') {
      alert('Por favor, insira seu nome antes de continuar.');
      return;
    }

    const message = `Olá ${name}, gostaria de falar sobre as aulas de inglês! 📚✍️`;
    const whatsappUrl = `https://wa.me/5511951985714?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });

