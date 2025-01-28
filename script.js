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

function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active'); // Isso alterna entre exibir e esconder o menu
}

document.querySelectorAll('header nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        const nav = document.querySelector('header nav');
        nav.classList.remove('active'); // Fecha o menu ao clicar em qualquer link
    });
});

function toggleMenu() {
    const menu = document.querySelector('ul.menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Alterna a classe 'active' para exibir ou esconder o menu
    menu.classList.toggle('active');
    
    // Alterna a classe 'active' no ícone do menu (efeito de mudança de ícone)
    menuIcon.classList.toggle('active');
}

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('ul.menu li a').forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('ul.menu');
        const menuIcon = document.querySelector('.menu-icon');
        
        // Fecha o menu e reseta o ícone ao clicar no link
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});