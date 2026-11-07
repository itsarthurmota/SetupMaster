document.addEventListener('DOMContentLoaded', () => {
  const stateEmpty = document.getElementById('state-empty');
  const stateForm = document.getElementById('state-form');
  const stateList = document.getElementById('state-list');

  const btnOpenEmpty = document.getElementById('btn-open-form-empty');
  const btnOpenList = document.getElementById('btn-open-form-list');
  const btnCancelForm = document.getElementById('btn-cancel-form');
  const formMachine = document.getElementById('form-machine');
  
  const machinesContainer = document.getElementById('machines-container');
  const statusCounter = document.getElementById('status-counter');

  function renderView() {
    const machines = mockDatabase.maquinas || [];

    stateEmpty.classList.add('hidden');
    stateForm.classList.add('hidden');
    stateList.classList.add('hidden');

    if (machines.length === 0) {
      stateEmpty.classList.remove('hidden');
    } else {
      stateList.classList.remove('hidden');
      renderMachinesList(machines);
    }
  }

  function renderMachinesList(machines) {
    machinesContainer.innerHTML = '';
    let activeCount = 0;

    machines.forEach(machine => {
      const isOperating = machine.status ? machine.status === 'Produzindo' : true;
      if (isOperating) activeCount++;

      const statusClass = machine.status === 'Manutenção' ? 'status-maintenance' : (machine.status === 'SETUP' ? 'status-setup' : 'status-ok');
      const currentPart = machine.current_part || 'Pença-01A';
      const machineStatus = machine.status || 'Produzindo';
      const imgSrc = machine.image || '../assets/images/fundo-cnc.png';

      const card = document.createElement('div');
      card.className = 'machine-monitor-card';
      card.innerHTML = `
        <div class="machine-card-media">
          <img src="${imgSrc}" alt="Imagem da máquina ${machine.machine_name}">
        </div>
        <div class="machine-card-info">
          <h4>${machine.machine_name}</h4>
          <div class="info-row">
            <span class="info-label">SITUAÇÃO:</span>
            <span class="info-status ${statusClass}">${machineStatus}</span>
          </div>
          <div class="info-row">
            <span class="info-label">PEÇA:</span>
            <span class="info-part">${currentPart}</span>
          </div>
        </div>
      `;
      machinesContainer.appendChild(card);
    });

    statusCounter.textContent = `OPERANDO: ${activeCount} / ${machines.length}`;
  }

  btnOpenEmpty.addEventListener('click', () => {
    stateEmpty.classList.add('hidden');
    stateForm.classList.remove('hidden');
  });

  btnOpenList.addEventListener('click', () => {
    stateList.classList.add('hidden');
    stateForm.classList.remove('hidden');
  });

  btnCancelForm.addEventListener('click', () => {
    renderView();
  });

  formMachine.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('machine_name').value;
    const maxTools = parseInt(document.getElementById('max_tools').value);
    const type = document.getElementById('machine_type').value;
    const maintDays = parseInt(document.getElementById('maintenance_days').value);

    const newMachine = {
      id_machine: Date.now(),
      machine_name: name,
      max_tools: maxTools,
      machine_type: type,
      maintenance_interval_days: maintDays,
      status: 'Produzindo',
      current_part: 'P-101',
      image: '../assets/images/fundo-cnc.png'
    };

    if (!mockDatabase.maquinas) {
      mockDatabase.maquinas = [];
    }

    mockDatabase.maquinas.push(newMachine);
    formMachine.reset();
    renderView();
  });

  renderView();
});