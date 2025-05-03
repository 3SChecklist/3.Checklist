const resultados = [
    {
      setor: "Estoque Central",
      responsavel: "João da Silva",
      data: "22/04/2025",
      pontuacao: "92%",
      status: "Completo"
    },
    {
      setor: "Embalagem",
      responsavel: "Maria Oliveira",
      data: "22/04/2025",
      pontuacao: "85%",
      status: "Completo"
    },
    {
      setor: "Expedição",
      responsavel: "Carlos Santos",
      data: "22/04/2025",
      pontuacao: "68%",
      status: "Em andamento"
    }
  ];
  
  const container = document.getElementById('resultado-container');
  
  resultados.forEach(resultado => {
    const card = document.createElement('div');
    card.classList.add('resultado-card');
    card.innerHTML = `
      <h3>${resultado.setor}</h3>
      <p><strong>Responsável:</strong> ${resultado.responsavel}</p>
      <p><strong>Data:</strong> ${resultado.data}</p>
      <p><strong>Pontuação:</strong> ${resultado.pontuacao}</p>
      <p><strong>Status:</strong> ${resultado.status}</p>
    `;
    container.appendChild(card);
  });
