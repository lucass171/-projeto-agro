// Seleção dos elementos do DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const alertBtn = document.getElementById('alert-btn');

// Função para alternar o tema (Modo Escuro / Modo Claro)
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Função para exibir um alerta ao clicar no botão principal
alertBtn.addEventListener('click', () => {
    alert('Olá! O JavaScript está funcionando perfeitamente neste site.');
});
