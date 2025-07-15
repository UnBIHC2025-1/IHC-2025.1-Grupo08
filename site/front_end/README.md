# Projeto IHC - Grupo 8

**Tema:** Operável – Foco Visível e Ordem de Foco  
**Critérios WCAG 2.2:** 2.4.7 e 2.4.11

---

## 👥 Integrantes do Grupo 8

Felipe Fernandes Brandim - 202016201
Luis Felipe de Souza Braga - 202016865
João Lucas Costa Vale - 170146243
Luiz Gustavo Silva de Almeida - 221022669


---

## 🎯 Critérios WCAG Implementados

### ✅ 2.4.7 – Foco Visível
Esse critério exige que todos os elementos interativos como botões, links e campos de formulário, mostrem visualmente quando estão em foco, afim de facilitar o entendimento ao navegar com o teclado ao usar a tecla Tab.

**Como foi implementado:**  
Estilizamos todos os elementos interativos com outline azul e realce de fundo ao receberem foco. Isso garante que o usuário saiba exatamente onde está ao navegar por teclado.

### ✅ 2.4.11 – Ordem de Foco
A ordem de navegação por teclado deve seguir uma sequência lógica e intuitiva, facilitando o uso por usuários que não usam mouse.

**Como foi implementado:**  
A estrutura da página foi organizada com HTML semântico e ordem natural dos elementos. Também criamos um "skip link" (link para pular o formulário) no topo da página, permitindo que o usuário avance diretamente para a próxima seção, sem precisar passar campo por campo.

---

## 🎯 Importância dos Critérios

Esses critérios são fundamentais para pessoas com deficiência motora, baixa visão ou que utilizam apenas teclado ou leitores de tela para navegar.

### Público-alvo beneficiado:
- Pessoas com deficiências motoras;
- Pessoas com baixa visão;
- Usuários de leitores de tela;
- Pessoas que usam apenas teclado por necessidade ou preferência.

---

## 🧑‍💻 Técnicas de Programação Utilizadas

- HTML5 semântico: `<nav>`, `<section>`, `<form>`, etc.
- CSS para estilo de foco visível com `:focus`, `outline` e `background-color`
- Link de pular conteúdo (`.skip-to-next`) com `position` e `aria`
- JavaScript básico para simular envio de formulário e exibir mensagem de confirmação com `aria-live`

---

## ▶️ Como rodar o código

1. Baixe ou clone este repositório
2. Abra a pasta no VS Code ou navegador
3. Abra o arquivo `index.html` em qualquer navegador moderno
4. Para simular a experiência de acessibilidade:
   - Use a tecla `Tab` para navegar entre os elementos
   - Observe o foco visível (borda azul + fundo claro)
   - Teste o link “Pular formulário”
   - Preencha e envie o formulário → aparece uma mensagem de confirmação

---

## 📎 Link para repositório

[🔗 Repositório no GitHub](https://github.com/UnBIHC2025-1/IHC-2025.1-Grupo08/tree/main)

---
