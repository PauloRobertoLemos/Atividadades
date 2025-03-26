// Função para o envio do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso! Obrigado pelo seu contato, ' + nome);
        // Aqui você pode adicionar uma lógica de envio de dados via AJAX ou API
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
