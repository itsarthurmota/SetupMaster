document.addEventListener('DOMContentLoaded', () => {
  const loggedUser = JSON.parse(localStorage.getItem('setupmaster_logged_user'));
  if (!loggedUser) {
    window.location.href = '../index.html';
    return;
  }

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('setupmaster_logged_user');
      window.location.href = '../index.html';
    });
  }

  const userNameEl = document.querySelector('.user-name');
  const userRoleEl = document.querySelector('.user-role');
  if (userNameEl) userNameEl.textContent = loggedUser.fullname;
  if (userRoleEl) userRoleEl.textContent = loggedUser.role || 'Tech Lead';

  const stateEmpty = document.getElementById('parts-state-empty');
  const stateForm = document.getElementById('parts-state-form');
  const stateList = document.getElementById('parts-state-list');

  const btnOpenEmpty = document.getElementById('btn-open-part-form-empty');
  const btnOpenList = document.getElementById('btn-open-part-form-list');
  const btnCancelForm = document.getElementById('btn-cancel-part-form');
  const formPart = document.getElementById('form-part');
  const selectMachine = document.getElementById('part_machine');

  const partsContainer = document.getElementById('parts-container');
  const partsStatusCounter = document.getElementById('parts-status-counter');

  function populateMachinesDropdown() {
    selectMachine.innerHTML = '<option value="">Selecione a máquina...</option>';
    const machines = mockDatabase.maquinas || [];
    machines.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id_machine;
      opt.textContent = m.machine_name;
      selectMachine.appendChild(opt);
    });
  }

  function renderView() {
    const parts = mockDatabase.pecas || [];

    stateEmpty.classList.add('hidden');
    stateForm.classList.add('hidden');
    stateList.classList.add('hidden');

    if (parts.length === 0) {
      stateEmpty.classList.remove('hidden');
    } else {
      stateList.classList.remove('hidden');
      renderPartsList(parts);
    }
  }

  function renderPartsList(parts) {
    partsContainer.innerHTML = '';

    parts.forEach(part => {
      const toolTags = part.tools 
        ? part.tools.map(t => `<span class="tool-tag">${t.tool_name}</span>`).join('') 
        : '<span class="tool-tag">Nenhuma</span>';

      const imageSrc = part.image || "../assets/images/fundo-cnc.png";

      const card = document.createElement('div');
      card.className = 'entity-card';
      card.innerHTML = `
        <div class="entity-card-media">
          <img src="${imageSrc}" alt="${part.name}">
        </div>
        <div class="entity-card-info">
          <h4>${part.part_code} - ${part.name}</h4>
          <div class="info-row">
            <span class="info-label">FABRICANTE:</span>
            <span class="info-value">${part.manufacturer || 'Usinagem Demo'}</span>
          </div>
          <div class="info-row">
            <span class="info-label">FERRAMENTAS NECESSÁRIAS:</span>
          </div>
          <div class="tool-list-tags">
            ${toolTags}
          </div>
        </div>
      `;
      partsContainer.appendChild(card);
    });

    partsStatusCounter.textContent = `CADASTRADAS: ${parts.length}`;
  }

  btnOpenEmpty.addEventListener('click', () => {
    populateMachinesDropdown();
    stateEmpty.classList.add('hidden');
    stateForm.classList.remove('hidden');
  });

  btnOpenList.addEventListener('click', () => {
    populateMachinesDropdown();
    stateList.classList.add('hidden');
    stateForm.classList.remove('hidden');
  });

  btnCancelForm.addEventListener('click', () => {
    renderView();
  });

  formPart.addEventListener('submit', (e) => {
    e.preventDefault();

    const code = document.getElementById('part_code').value;
    const name = document.getElementById('part_name').value;
    const manufacturer = document.getElementById('part_manufacturer').value;

    const newPart = {
      id_part: Date.now(),
      part_code: code,
      name: name,
      manufacturer: manufacturer,
      image: "../assets/images/fundo-cnc.png",
      tools: [
        { id_tool: 1, tool_name: "Broca Ø10mm", tool_type: "Furação", insert_type: "Metal Duro", supplier: "Sandvik", image: "../assets/images/fundo-cnc.png" },
        { id_tool: 2, tool_name: "Mandril BT40", tool_type: "Fixação", insert_type: "Padrão ISO", supplier: "Seco Tools", image: "../assets/images/fundo-cnc.png" }
      ]
    };

    if (!mockDatabase.pecas) {
      mockDatabase.pecas = [];
    }

    mockDatabase.pecas.push(newPart);
    formPart.reset();
    renderView();
  });

  renderView();
});