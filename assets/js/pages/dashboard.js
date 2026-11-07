// assets/js/pages/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Calcula Indicadores
  const totalMachines = mockDatabase.maquinas ? mockDatabase.maquinas.length : 0;
  
  // Extrai todas as ferramentas das peças cadastradas
  let allTools = [];
  if (mockDatabase.pecas) {
    mockDatabase.pecas.forEach(peca => {
      if (peca.tools) {
        allTools = allTools.concat(peca.tools);
      }
    });
  }

  const toolsInUseCount = allTools.length;
  const toolsStockCount = toolsInUseCount + 8; // Simulação de estoque restante

  // 2. Atualiza elementos do DOM
  document.getElementById('kpi-machines').textContent = totalMachines;
  document.getElementById('kpi-tools-in-use').textContent = toolsInUseCount;
  document.getElementById('kpi-tools-stock').textContent = toolsStockCount;

  // 3. Renderiza Atividades
  const container = document.getElementById('activities-container');
  
  if (mockDatabase.pecas && mockDatabase.pecas.length >= 2) {
    const pecaA = mockDatabase.pecas[0];
    const pecaB = mockDatabase.pecas[1];

    container.innerHTML = `
      <div class="activity-card filled">
        <h4>  Setup Otimizado: ${pecaA.part_code} ➔ ${pecaB.part_code}</h4>
        <p>Comparação realizada recentemente. 3 ferramentas mantidas no carrossel CNC.</p>
      </div>
      <div class="activity-card filled">
        <h4> Máquina Registrada</h4>
        <p> Torno CNC ROMI 0101-TRN cadastrado e pronto para operação.</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="activity-card empty">
        <p>NENHUMA ATIVIDADE INICIADA</p>
      </div>
      <div class="activity-card empty">
        <p>NENHUMA ATIVIDADE INICIADA</p>
      </div>
    `;
  }
});