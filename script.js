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




  document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("submitButton");
    const form = document.getElementById("studentForm");

    if (button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();  // Impede o envio padrão do formulário

            // Capturando os dados do formulário
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                // Enviando os dados para o servidor
                fetch("http://localhost:5500/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                })
                .then(response => {
                    if (response.ok) {
                        alert("E-mail enviado com sucesso!");
                        form.reset();  // Limpa o formulário
                    } else {
                        alert("Erro ao enviar o e-mail. Tente novamente.");
                    }
                })
                .catch(error => {
                    console.error("Erro ao enviar e-mail:", error);
                    alert("Erro ao enviar o e-mail. Tente novamente.");
                });
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});





document.getElementById('studentForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  // Captura os dados do formulário
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Converte os dados em JSON
    });

    if (response.ok) {
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      this.reset(); // Reseta o formulário após sucesso
    } else {
      alert('Erro ao enviar o e-mail.');
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro ao tentar enviar o e-mail.');
  }
});

