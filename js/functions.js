export function Modal(triggerId, modalHTML) {
  const trigger = document.getElementById(triggerId);

  if (!trigger) return; // protege caso não ache o ID

  trigger.addEventListener("click", () => {
    // fecha outros modais abertos
    document.querySelectorAll('.modal-overlay').forEach(o => o.remove());

    // Criar overlay
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    // Criar container do modal
    const container = document.createElement("div");
    container.classList.add("modal-container");
    container.innerHTML = `
      <button class="modal-close">&times;</button>
      ${modalHTML}
    `;

    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // Fechar ao clicar no X ou fora do modal
    container.querySelector(".modal-close").addEventListener("click", () => {
      overlay.remove();
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  });
}
