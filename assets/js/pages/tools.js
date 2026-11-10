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

  const stateEmpty = document.getElementById('tools-state-empty');
  const stateForm = document.getElementById('tools-state-form');
  const stateList = document.getElementById('tools-state-list');

  const btnOpenEmpty = document.getElementById('btn-open-tool-form-empty');
  const btnOpenList = document.getElementById('btn-open-tool-form-list');
  const btnCancelForm = document.getElementById('btn-cancel-tool-form');
  const formTool = document.getElementById('form-tool');

  const toolsContainer = document.getElementById('tools-container');
  const toolsStatusCounter = document.getElementById('tools-status-counter');

  function getAllTools() {
    let list = [];
    if (mockDatabase.pecas) {
      mockDatabase.pecas.forEach(p => {
        if (p.tools) {
          p.tools.forEach(t => {
            if (!list.some(existing => existing.id_tool === t.id_tool)) {
              list.push(t);
            }
          });
        }
      });
    }
    return list;
  }

  function renderView() {
    const tools = getAllTools();

    stateEmpty.classList.add('hidden');
    stateForm.classList.add('hidden');
    stateList.classList.add('hidden');

    if (tools.length === 0) {
      stateEmpty.classList.remove('hidden');
    } else {
      stateList.classList.remove('hidden');
      renderToolsList(tools);
    }
  }

  function renderToolsList(tools) {
    toolsContainer.innerHTML = '';

    tools.forEach(tool => {
      const imageSrc = tool.image || "../assets/images/fundo-cnc.png";

      const card = document.createElement('div');
      card.className = 'entity-card';
      card.innerHTML = `
        <div class="entity-card-media">
          <img src="${imageSrc}" alt="${tool.tool_name}">
        </div>
        <div class="entity-card-info">
          <h4>${tool.tool_name}</h4>
          <div class="info-row">
            <span class="info-label">TIPO:</span>
            <span class="info-value">${tool.tool_type}</span>
          </div>
          <div class="info-row">
            <span class="info-label">INSERTO:</span>
            <span class="info-value">${tool.insert_type || 'Padrão ISO'}</span>
          </div>
          <div class="info-row">
            <span class="info-label">FORNECEDOR:</span>
            <span class="info-value">${tool.supplier || 'Sandvik'}</span>
          </div>
        </div>
      `;
      toolsContainer.appendChild(card);
    });

    toolsStatusCounter.textContent = `CADASTRADAS: ${tools.length}`;
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

  formTool.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('tool_name').value;
    const type = document.getElementById('tool_type').value;
    const insertType = document.getElementById('insert_type').value;
    const supplier = document.getElementById('supplier').value;

    const newTool = {
      id_tool: Date.now(),
      tool_name: name,
      tool_type: type,
      insert_type: insertType || 'Padrão ISO',
      supplier: supplier || 'Sandvik',
      image: "../assets/images/fundo-cnc.png"
    };

    if (mockDatabase.pecas && mockDatabase.pecas.length > 0) {
      mockDatabase.pecas[0].tools.push(newTool);
    }

    formTool.reset();
    renderView();
  });

  renderView();
});