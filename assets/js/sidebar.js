document.addEventListener('DOMContentLoaded', () => {
  const sidebarHamburger = document.getElementById('sidebar-hamburger');
  const sidebarMenu = document.getElementById('sidebar-menu');

  if (!sidebarHamburger || !sidebarMenu) return;

  const closeSidebarMenu = () => {
    sidebarHamburger.classList.remove('active');
    sidebarMenu.classList.remove('active');
    sidebarHamburger.setAttribute('aria-expanded', 'false');
    sidebarHamburger.setAttribute('aria-label', 'Abrir menu');
  };

  sidebarHamburger.addEventListener('click', () => {
    const isOpen = sidebarHamburger.classList.toggle('active');
    sidebarMenu.classList.toggle('active', isOpen);
    sidebarHamburger.setAttribute('aria-expanded', String(isOpen));
    sidebarHamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  sidebarMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebarMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && sidebarMenu.classList.contains('active')) {
      closeSidebarMenu();
      sidebarHamburger.focus();
    }
  });
});
