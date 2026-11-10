document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('.register-form');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password !== confirmPassword) {
        alert('As senhas não coincidem! Verifique e tente novamente.');
        return;
      }

      const userData = {
        fullname: document.getElementById('fullname').value,
        role: document.getElementById('role').value,
        email: document.getElementById('email').value.toLowerCase().trim(),
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        password: password,
        provider: 'local'
      };

      const registeredUsers = JSON.parse(localStorage.getItem('setupmaster_users')) || [];

      const userExists = registeredUsers.some(u => u.email === userData.email);
      if (userExists) {
        alert('Este e-mail já está cadastrado no sistema! Faça login para continuar.');
        return;
      }

      registeredUsers.push(userData);
      localStorage.setItem('setupmaster_users', JSON.stringify(registeredUsers));

      alert('Cadastro realizado com sucesso! Faça login para acessar o sistema.');
      window.location.href = 'login.html';
    });
  }
});