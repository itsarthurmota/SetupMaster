document.querySelectorAll("[data-toggle-password]").forEach((button) => {
  const inputId = button.getAttribute("aria-controls");
  const input = inputId ? document.getElementById(inputId) : null;

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Campo de senha não encontrado: ${inputId}`);
  }

  const icon = button.querySelector("img");
  if (!(icon instanceof HTMLImageElement)) {
    throw new Error(`Ícone do campo de senha não encontrado: ${inputId}`);
  }

  button.addEventListener("click", () => {
    const showPassword = input.type === "password";
    input.type = showPassword ? "text" : "password";
    button.setAttribute("aria-pressed", String(showPassword));
    button.setAttribute("aria-label", showPassword ? "Ocultar senha" : "Mostrar senha");
    icon.src = showPassword ? icon.dataset.iconVisible : icon.dataset.iconHidden;
  });
});