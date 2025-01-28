document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        document.getElementById('feedback').innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    } else {
        document.getElementById('feedback').innerText = 'Por favor, preencha todos os campos.';
    }
});