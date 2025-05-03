document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const avaliacao = document.getElementById("avaliacao").value;
        const comentario = document.getElementById("comentario").value.trim();
        const feedbackEstoque = document.getElementById("feedback_estoque").value.trim();

        // Validação básica
        if (!nome || !email || !comentario || !feedbackEstoque) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Simulação de envio (pode ser adaptado para backend)
        console.log({
            nome,
            email,
            avaliacao,
            comentario,
            feedbackEstoque
        });

        alert("Obrigado pelo seu feedback, " + nome + "!");

        // Resetando o formulário
        form.reset();
    });
});
