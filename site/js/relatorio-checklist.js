document.addEventListener("DOMContentLoaded", () => {
  const jsPDF = window.jspdf?.jsPDF;
  if (!jsPDF) {
    console.error("jsPDF não está carregado.");
    return;
  }

  // Garante que só haja botão se houver checklist real
  const mainContent = document.querySelector(
    ".md-content__inner, .wy-nav-content"
  );
  if (!mainContent) return;

  const checkboxes = mainContent.querySelectorAll('input[type="checkbox"]');
  if (checkboxes.length === 0) return;

  // Cria botão
  const checklistButton = document.createElement("button");
  checklistButton.id = "generate-report";
  checklistButton.innerText = "📄 Gerar Relatório de Checklist";
  checklistButton.onclick = openModal;

  const isIndex =
    location.pathname.endsWith("/") ||
    location.pathname.endsWith("/index.html");
  if (isIndex) return;
  mainContent.prepend(checklistButton);

  // Cria modal
  const modal = document.createElement("div");
  modal.id = "report-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Gerar Relatório de Checklist</h3>
      <label for="project-name">Nome do Projeto:</label>
      <input type="text" id="project-name" placeholder="IncluCheck">
      <label for="project-desc">Descrição:</label>
      <textarea id="project-desc" rows="3" placeholder="Breve descrição do projeto..."></textarea>
      <button id="download-report">📥 Baixar PDF</button>
      <button id="close-modal">Cancelar</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("close-modal").onclick = () =>
    (modal.style.display = "none");
  document.getElementById("download-report").onclick = generatePDF;

  function openModal() {
    document.getElementById("report-modal").style.display = "flex";
  }

  function generatePDF() {
    const projectName =
      document.getElementById("project-name").value || "IncluCheck";
    const description =
      document.getElementById("project-desc").value ||
      "Checklist de acessibilidade";
    const today = new Date().toLocaleDateString("pt-BR");

    // Apenas checkboxes do conteúdo principal
    const allCheckboxes = mainContent.querySelectorAll(
      'input[type="checkbox"]'
    );
    const marked = [];
    const unmarked = [];

    allCheckboxes.forEach((cb) => {
      const labelEl = cb.closest("li") || cb.parentElement;
      const label =
        labelEl?.innerText?.trim().replace(/\s+/g, " ") ||
        "Item não identificado";
      if (cb.checked) {
        marked.push(label);
      } else {
        unmarked.push(label);
      }
    });

    const total = marked.length + unmarked.length;

    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(16);
    doc.text(`Relatório de Checklist - ${projectName}`, 14, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Descrição: ${description}`, 14, y);
    y += 10;
    doc.text(`Data: ${today}`, 14, y);
    y += 10;
    doc.text(
      `Progresso: ${marked.length}/${total} (${(
        (marked.length / total) *
        100
      ).toFixed(0)}%)`,
      14,
      y
    );
    y += 10;

    const addSection = (title, items) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.setFontSize(13);
      doc.text(title, 14, y);
      y += 8;
      doc.setFontSize(11);
      if (items.length === 0) {
        doc.text("Nenhum item", 14, y);
        y += 8;
        return;
      }
      items.forEach((item) => {
        const lines = doc.splitTextToSize(`• ${item}`, 180);
        lines.forEach((line) => {
          if (y > 270) {
            doc.addPage();
            y = 20;
          }
          doc.text(line, 14, y);
          y += 6;
        });
      });
    };

    addSection("Itens Marcados:", marked);
    addSection("Itens Não Marcados:", unmarked);

    const fileName = `relatorio-${projectName
      .toLowerCase()
      .replace(/\s+/g, "-")}.pdf`;
    doc.save(fileName);
    modal.style.display = "none";
  }
});
