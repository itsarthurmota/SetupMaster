document.addEventListener('DOMContentLoaded', () => {
  const loggedUser = JSON.parse(localStorage.getItem('setupmaster_logged_user'));
  
  if (loggedUser) {
    const nameEl = document.getElementById('op-user-name');
    if (nameEl) nameEl.textContent = loggedUser.fullname;
  }

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('setupmaster_logged_user');
      window.location.href = '../index.html';
    });
  }

  const selectMachine = document.getElementById('op-machine-select');
  if (selectMachine && mockDatabase.maquinas) {
    selectMachine.innerHTML = '';
    mockDatabase.maquinas.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id_machine;
      opt.textContent = `${m.machine_name} (${m.machine_type})`;
      selectMachine.appendChild(opt);
    });
  }

  const btnFinish = document.getElementById('btn-finish-setup');
  if (btnFinish) {
    btnFinish.addEventListener('click', () => {
      alert('Setup concluído com sucesso! Máquina liberada para produção.');
      window.location.reload();
    });
  }
});