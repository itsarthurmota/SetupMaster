
document.addEventListener('DOMContentLoaded', () => {
  const selectA = document.getElementById('select-part-a');
  const selectB = document.getElementById('select-part-b');
  const btnCompare = document.getElementById('btn-compare');
  const resultsPanel = document.getElementById('results-panel');

  // 1. Popula as opções dos dropdowns com as peças do mock
  mockDatabase.pecas.forEach(peca => {
    const optionA = document.createElement('option');
    optionA.value = peca.id_part;
    optionA.textContent = `${peca.part_code} - ${peca.name}`;
    selectA.appendChild(optionA);

    const optionB = document.createElement('option');
    optionB.value = peca.id_part;
    optionB.textContent = `${peca.part_code} - ${peca.name}`;
    selectB.appendChild(optionB);
  });

  // 2. Evento de clique no botão Comparar
  btnCompare.addEventListener('click', () => {
    const idA = parseInt(selectA.value);
    const idB = parseInt(selectB.value);

    if (!idA || !idB) {
      alert('Por favor, selecione as duas peças!');
      return;
    }

    if (idA === idB) {
      alert('Selecione duas peças diferentes para comparar o setup.');
      return;
    }

    const pecaA = mockDatabase.pecas.find(p => p.id_part === idA);
    const pecaB = mockDatabase.pecas.find(p => p.id_part === idB);

    // Lógica dos Conjuntos (Set Logic)
    const ferramentasA = pecaA.tools;
    const ferramentasB = pecaB.tools;

    // Em comum (Manter)
    const comuns = ferramentasA.filter(tA => 
      ferramentasB.some(tB => tB.id_tool === tA.id_tool)
    );

    // Exclusivas de A (Remover)
    const remover = ferramentasA.filter(tA => 
      !ferramentasB.some(tB => tB.id_tool === tA.id_tool)
    );

    // Exclusivas de B (Adicionar)
    const adicionar = ferramentasB.filter(tB => 
      !ferramentasA.some(tA => tA.id_tool === tB.id_tool)
    );

    // Renderiza nas colunas
    renderList('list-keep', comuns);
    renderList('list-remove', remover);
    renderList('list-add', adicionar);

    // Exibe o painel de resultados
    resultsPanel.classList.remove('hidden');
  });

  function renderList(elementId, tools) {
    const ul = document.getElementById(elementId);
    ul.innerHTML = '';

    if (tools.length === 0) {
      ul.innerHTML = '<li><i>Nenhuma ferramenta nesta categoria</i></li>';
      return;
    }

    tools.forEach(tool => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${tool.tool_name}</strong> <small>(${tool.tool_type})</small>`;
      ul.appendChild(li);
    });
  }
});