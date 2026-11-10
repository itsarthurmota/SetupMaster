document.addEventListener('DOMContentLoaded', () => {
  const btnGoogle = document.getElementById('btn-google-login');
  const btnGithub = document.getElementById('btn-github-login');
  const loginForm = document.querySelector('.register-form');

  const getDestination = (user) => user.provider === 'github'
    ? 'operator.html'
    : 'dashboard.html';

  const loggedUser = localStorage.getItem('setupmaster_logged_user');
  if (loggedUser && window.location.pathname.includes('login.html')) {
    window.location.href = getDestination(JSON.parse(loggedUser));
    return;
  }

  if (btnGoogle) {
    btnGoogle.addEventListener('click', () => {
      const width = 500;
      const height = 600;
      const left = (window.innerWidth / 2) - (width / 2);
      const top = (window.innerHeight / 2) - (height / 2);

      const popup = window.open(
        '', 
        'GoogleLogin', 
        `width=${width},height=${height},top=${top},left=${left}`
      );

      popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Fazer login nas Contas do Google</title>
          <style>
            body { font-family: 'Segoe UI', Roboto, sans-serif; background: #ffffff; margin: 0; padding: 40px 30px; text-align: center; color: #202124; }
            .logo { width: 75px; margin-bottom: 16px; }
            h2 { font-size: 22px; font-weight: 400; margin-bottom: 8px; }
            p { color: #5f6368; font-size: 14px; margin-bottom: 30px; }
            .account-card { display: flex; align-items: center; padding: 12px; border: 1px solid #dadce0; border-radius: 8px; cursor: pointer; text-align: left; transition: background 0.2s; }
            .account-card:hover { background: #f8f9fa; }
            .avatar { width: 40px; height: 40px; border-radius: 50%; background: #1fb6b2; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 12px; }
            .info strong { display: block; font-size: 14px; }
            .info span { font-size: 12px; color: #5f6368; }
          </style>
        </head>
        <body>
          <svg class="logo" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
          <h2>Escolha uma conta</h2>
          <p>para prosseguir para o <strong>SetupMaster</strong></p>
          
          <div class="account-card" id="selectAccount">
            <div class="avatar">AH</div>
            <div class="info">
              <strong>Arthur Henrique</strong>
              <span>arthur.techlead@industria.com.br</span>
            </div>
          </div>

          <script>
            document.getElementById('selectAccount').onclick = function() {
              window.opener.postMessage('google_success', '*');
              window.close();
            };
          <\/script>
        </body>
        </html>
      `);

      window.addEventListener('message', (event) => {
        if (event.data === 'google_success') {
          const mockUser = {
            fullname: 'Arthur Henrique',
            role: 'Tech Lead / Operador',
            email: 'arthur.techlead@industria.com.br',
            company: 'Usinagem Master CNC',
            provider: 'google'
          };

          localStorage.setItem('setupmaster_logged_user', JSON.stringify(mockUser));
          window.location.href = getDestination(mockUser);
        }
      }, { once: true });
    });
  }

  if (btnGithub) {
    btnGithub.addEventListener('click', () => {
      const mockUser = {
        fullname: 'Arthur Henrique (GitHub)',
        role: 'Tech Lead',
        email: 'arthur.github@industria.com.br',
        company: 'Dev Fabril',
        provider: 'github'
      };
      localStorage.setItem('setupmaster_logged_user', JSON.stringify(mockUser));
      window.location.href = getDestination(mockUser);
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('email').value.toLowerCase().trim();
      const passwordInput = document.getElementById('password').value;

      const registeredUsers = JSON.parse(localStorage.getItem('setupmaster_users')) || [];
      const user = registeredUsers.find(u => u.email === emailInput && u.password === passwordInput);

      if (!user) {
        alert('E-mail ou senha incorretos! Crie uma conta ou verifique seus dados antes de logar.');
        return;
      }

      localStorage.setItem('setupmaster_logged_user', JSON.stringify(user));
      window.location.href = getDestination(user);
    });
  }
});