document.addEventListener('DOMContentLoaded', () => {
  const loggedUser = JSON.parse(localStorage.getItem('setupmaster_logged_user'));

  if (!loggedUser) {
    alert('Acesso negado! Faça login primeiro.');
    window.location.href = 'login.html';
    return;
  }

  const userNameEl = document.querySelector('.user-name');
  const userRoleEl = document.querySelector('.user-role');

  if (userNameEl) userNameEl.textContent = loggedUser.fullname;
  if (userRoleEl) userRoleEl.textContent = loggedUser.role || 'Operador';

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('setupmaster_logged_user');
      window.location.href = '../index.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  
  const totalMachines = mockDatabase.maquinas ? mockDatabase.maquinas.length : 0;
  
 
  let allTools = [];
  if (mockDatabase.pecas) {
    mockDatabase.pecas.forEach(peca => {
      if (peca.tools) {
        allTools = allTools.concat(peca.tools);
      }
    });
  }

  const toolsInUseCount = allTools.length;
  const toolsStockCount = toolsInUseCount + 8;

  document.getElementById('kpi-machines').textContent = totalMachines;
  document.getElementById('kpi-tools-in-use').textContent = toolsInUseCount;
  document.getElementById('kpi-tools-stock').textContent = toolsStockCount;

  const container = document.getElementById('activities-container');
  
  if (mockDatabase.pecas && mockDatabase.pecas.length >= 2) {
    const pecaA = mockDatabase.pecas[0];
    const pecaB = mockDatabase.pecas[1];

    container.innerHTML = `
      <div class="activity-card filled">
        <h4>Setup Otimizado: ${pecaA.part_code} -> ${pecaB.part_code}</h4>
        <p>Comparação realizada recentemente. 3 ferramentas mantidas no carrossel CNC.</p>
      </div>
      <div class="activity-card filled">
        <h4>Máquina Registrada</h4>
        <p>Torno CNC ROMI 0101-TRN cadastrado e pronto para operação.</p>
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