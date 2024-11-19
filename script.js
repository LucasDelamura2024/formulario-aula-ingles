const scriptURL = 'https://script.google.com/macros/s/AKfycbyb8fBCmJuls-Ig3dWq8rJtnm6nSAZL3gR-09vduB7MZ4A-5BrdivhgRjU6LQKawbUO/exec';
const form = document.getElementById('studentForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('Formulário enviado com sucesso!'))
    .catch(error => console.error('Erro!', error.message));
});
