# IncluChek

<div align="center">
<img src="docs/imagens/logo-incluchek.png" alt="Logo do projeto IncluCheck,consiste em um simbolo de check com um fundo inspirado na logo da Unb." style="width: 100px">
</div>

# Links:

**Guia:**

https://unbihc2025-1.github.io/IHC-2025.1-Grupo08/

**Front do Projeto IHC:**

http://173.249.15.25:8080

## Introdução

Este repositório tem como objetivo disponibilizar um checklist prático de acessibilidade voltado para projetos — especialmente aqueles relacionados ao desenvolvimento de software — abrangendo áreas como desenvolvimento web, design, produção de conteúdo e gerenciamento de projetos.

## IncluCheck

O IncluCheck é o nome do projeto criado a partir do curso de Interação Humano Computador, ministrado pela docente Rejane Maria da Costa Figueiredo, na Universidade de Brasília (UnB).

## Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/Felipe-Brandim"><img style="border-radius: 50%;" src="https://github.com/Felipe-Brandim.png" width="100px;" alt=""/><br /><sub><b>Felipe Brandim</b></sub></a><br />
    <td align="center"><a href="https://github.com/Luizinoo"><img style="border-radius: 50%;" src="https://github.com/Luizinoo.png" width="100px;" alt=""/><br /><sub><b>Luis Felipe</b></sub></a><br />   
    <td align="center"><a href="https://github.com/joaolucas102"><img style="border-radius: 50%;" src="https://github.com/joaolucas102.png" width="100px;" alt=""/><br /><sub><b>João Lucas</b></sub></a><br />   
    <td align="center"><a href="https://github.com/LuizGust4vo "><img style="border-radius: 50%;" src="https://github.com/LuizGust4vo.png" width="100px;" alt=""/><br /><sub><b>Luis Gustavo</b></sub></a><br />
  </tr>
</table> 

---
# Projeto IHC

**Tema:** Operável – Foco Visível e Ordem de Foco  
**Critérios WCAG 2.2:** 2.4.7 e 2.4.11
---

##  Critérios WCAG Implementados

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

##  Técnicas de Programação Utilizadas

- HTML5 semântico: `<nav>`, `<section>`, `<form>`, etc.
- CSS para estilo de foco visível com `:focus`, `outline` e `background-color`
- Link de pular conteúdo (`.skip-to-next`) com `position` e `aria`
- JavaScript básico para simular envio de formulário e exibir mensagem de confirmação com `aria-live`

---

## ▶️ Como rodar o código

1. Baixe ou clone este repositório
2. Abra a pasta /site/front_end no VS Code ou onde preferir
3. Abra o arquivo `index.html` em qualquer navegador moderno
4. Para simular a experiência de acessibilidade:
   - Use a tecla `Tab` para navegar entre os elementos
   - Observe o foco visível (borda azul + fundo claro)
   - Teste o link “Pular formulário”
   - Preencha e envie o formulário → aparece uma mensagem de confirmação

---

