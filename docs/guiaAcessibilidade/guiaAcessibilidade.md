# 🏆 Guia de Boas Práticas em Acessibilidade Digital

**Baseado na WCAG 2.2, NBR 17225:2025 e diretrizes da ABNT**

> Este guia é um material de referência definitivo, prático e atualizado para promover acessibilidade digital em projetos web, sistemas e conteúdos. Ele unifica recomendações internacionais (WCAG 2.2) e brasileiras (NBR 17225:2025), orientando para a criação de experiências inclusivas, acessíveis e universais.

## 🎯 Princípios Fundamentais (WCAG)

- [ ] **Perceptível:** As informações devem ser apresentadas de forma que todos possam perceber.
- [ ] **Operável:** Todos os componentes e navegação devem ser utilizáveis.
- [ ] **Compreensível:** A interface e os conteúdos devem ser fáceis de entender.
- [ ] **Robusto:** Compatível com diferentes agentes de usuário, incluindo tecnologias assistivas.

## 🆕 Novidades na WCAG 2.2 (🌟 Destaques Importantes)

### 🔷 Critérios Novos:

- [ ] **2.4.11 – Foco Não Oculto (AA)**  
       👉 O foco de teclado deve estar sempre visível e nunca ser encoberto por outros elementos.

- [ ] **2.4.12 – Aparência do Foco (AAA)**  
       👉 O foco deve ser altamente visível, com contraste mínimo de 3:1 e uma área mínima destacada.

- [ ] **2.5.7 – Alternativa ao Arrastar (AA)**  
       👉 Qualquer função que exija arrastar (ex.: sliders, calendários) deve oferecer alternativa, como cliques ou setas.

- [ ] **2.5.8 – Alvo Tamanho Mínimo (AA)**  
       👉 Áreas de clique devem ter pelo menos **24x24 pixels CSS**, salvo exceções.

- [ ] **3.2.6 – Consistência da Ajuda (A)**  
       👉 Recursos de ajuda (suporte, FAQs, contatos) devem estar disponíveis de forma consistente em todas as páginas.

- [ ] **3.3.7 – Mecanismo de Entrada Reduzida (A)**  
       👉 Processos que exigem entrada de texto devem ter formas de simplificação, como copiar e colar, preenchimento automático ou métodos alternativos.

### ❌ Critério Removido:

- **4.1.1 – Parsing**  
  🔻 Removido por obsolescência. Embora não seja mais obrigatório, manter código bem estruturado e semanticamente correto continua sendo uma boa prática.

## ⌨️ Interação por Teclado

- [ ] Todo conteúdo e funcionalidade operável via teclado.
- [ ] Indicador de foco sempre visível e destacado (**🌟 Novo: Foco Não Oculto - 2.4.11**).
- [ ] Aparência do foco atende contraste e área mínima (**🌟 Novo: Aparência do Foco - 2.4.12**).
- [ ] Ordem de navegação lógica e previsível.
- [ ] Sem armadilhas de foco.
- [ ] Atalhos devem ser simples, configuráveis e com tecla modificadora.

## 🖼️ Imagens

- [ ] Texto alternativo adequado (`alt`) para imagens informativas e funcionais.
- [ ] Imagens decorativas marcadas como `alt=""`.
- [ ] Descrição adicional para imagens complexas (gráficos, mapas).
- [ ] Evitar usar texto embutido em imagens, salvo quando essencial.

## 🏗️ Estrutura: Cabeçalhos, Regiões e Listas

- [ ] Hierarquia de cabeçalhos correta (`h1`, `h2`, ...).
- [ ] Título principal definido por página.
- [ ] Áreas como navegação, conteúdo principal e rodapé devem ter marcação semântica (`<nav>`, `<main>`, `<footer>`, etc.).
- [ ] Listas bem estruturadas semanticamente para refletir agrupamentos.

## 📊 Tabelas

- [ ] Usadas apenas para dados estruturados, não para layout.
- [ ] Cabeçalhos (`<th>`) associados corretamente às células (`<td>`).
- [ ] Fornecer título e, se necessário, descrição para tabelas complexas.

## 🔗 Links e Navegação

- [ ] Texto do link é autoexplicativo (evitar "clique aqui").
- [ ] Indicar claramente se um link abre nova aba ou documento externo.
- [ ] Navegação consistente entre páginas.
- [ ] Oferecer opção de pular blocos repetitivos (“Ir para conteúdo principal”).

## 🖲️ Botões e Controles

- [ ] Botões e controles possuem rótulos claros.
- [ ] Área mínima de clique de **24x24 pixels CSS** (**🌟 Novo: Alvo Tamanho Mínimo - 2.5.8**).
- [ ] Controles oferecem feedback e seguem comportamentos previsíveis.

## 📝 Formulários e Entrada de Dados

- [ ] Campos com rótulos descritivos e associados semanticamente.
- [ ] Indicação visual e programática de campos obrigatórios.
- [ ] Ajuda contextual clara e agrupamento de campos relacionados.
- [ ] Mensagens de erro são descritivas e sugerem correção.
- [ ] Alternativas para entradas complexas (**🌟 Novo: Mecanismo de Entrada Reduzida - 3.3.7**).
- [ ] Autenticação e validações sensoriais são acessíveis a diferentes usuários.

## 🎨 Apresentação e Uso de Cores

- [ ] Não usar cor como única forma de transmitir informação.
- [ ] Contraste de pelo menos **4.5:1** para texto e **3:1** para textos grandes e interfaces.
- [ ] Componentes e foco com contraste adequado e área visível.
- [ ] Layout responsivo e compatível com diferentes tamanhos e orientações de tela.

## 📑 Conteúdo Textual

- [ ] Espaçamento adequado entre linhas e blocos de texto.
- [ ] Alinhamento preferencial à esquerda (ou à direita, conforme idioma).
- [ ] Textos podem ser ampliados até 200% sem perda de funcionalidade.
- [ ] Uso correto de semântica textual (`<strong>`, `<em>`, `<abbr>`, etc.).
- [ ] Linguagem simples, clara e objetiva, com definição de termos e siglas.

## 🎥 Multimídia: Áudio, Vídeo e Animações

- [ ] Vídeos possuem legendas, transcrição, audiodescrição e, quando necessário, janela em Libras.
- [ ] Conteúdos em áudio oferecem alternativa textual.
- [ ] Animações não são automáticas ou podem ser pausadas.
- [ ] Evitar flashes que possam causar desconforto ou crises fotossensíveis.

## ⏱️ Tempo e Atualizações

- [ ] Permitir ajustes em interações com tempo limite.
- [ ] Mudanças automáticas devem ser controláveis pelo usuário.
- [ ] Dados preenchidos são preservados após reautenticação ou atualizações.

## 🧠 Código e Estrutura Semântica

- [ ] Idioma principal e idiomas secundários definidos (`lang`).
- [ ] Títulos de página, frames e componentes corretamente configurados.
- [ ] Ordem de leitura lógica e determinada programaticamente.
- [ ] Componentes personalizados possuem nome acessível e são compatíveis com tecnologias assistivas.
- [ ] Zoom permitido sem quebra de layout.

## 🚀 Checklist Final de Implementação

- [ ] Acessibilidade aplicada desde a concepção (Design Universal).
- [ ] Testes realizados com navegação por teclado, leitores de tela e dispositivos móveis.
- [ ] Participação de pessoas com deficiência no processo de validação.
- [ ] Documentação de critérios e práticas de acessibilidade mantida no projeto.
- [ ] Acessibilidade tratada como processo contínuo, não como uma etapa isolada.

## 📚 Referências

- 🔗 [WCAG 2.2 – Tradução oficial W3C Brasil](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/)
- 🔗 [NBR 17225:2025 – Acessibilidade em Conteúdo e Aplicações Web (ABNT)](https://www.abntcatalogo.com.br)
- 🔗 [Documentação oficial do W3C](https://www.w3.org/WAI/standards-guidelines/wcag/)

> ✨ Este documento é uma síntese prática e robusta das melhores práticas atuais de acessibilidade digital, e deve ser tratado como um pilar na construção de experiências inclusivas.
