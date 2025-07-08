# Informativo sobre WCAG 2.2 e NBR 17225:2025

### 🔹 WCAG 2.2 (Web Content Accessibility Guidelines)

A WCAG é um conjunto internacional de diretrizes do W3C que define padrões para tornar conteúdos web mais acessíveis a pessoas com diferentes tipos de deficiência. Seus princípios são:

- **Perceptível:** O conteúdo deve ser apresentado de forma que possa ser percebido pelos sentidos do usuário.
- **Operável:** Os elementos da interface devem ser utilizáveis por diferentes formas de navegação (teclado, mouse, toque).
- **Compreensível:** As informações e a interface devem ser fáceis de entender.
- **Robusto:** O conteúdo deve ser compatível com diferentes agentes de usuário e tecnologias assistivas.

Além desses princípios, a versão 2.2 da WCAG introduz novos critérios, como:

- **2.4.11 – Foco Não Oculto**
- **2.4.12 – Aparência do Foco**
- **2.5.7 – Alternativa ao Arrastar**
- **2.5.8 – Alvo Tamanho Mínimo**
- **3.2.6 – Consistência da Ajuda**
- **3.3.7 – Mecanismo de Entrada Reduzida**

Vale lembrar que a versão atual da WCAG é a versão 2.2, com a versão 3.0 já em estagios iniciais de desenvolvimento.

### 🔹 NBR 17225:2025

Norma brasileira da ABNT que estabelece requisitos para acessibilidade em conteúdos e aplicações web, adaptando os princípios da WCAG à realidade e à legislação brasileiras.

Diretrizes extraídas da NBR e utilizadas neste guia incluem:

- **Planejamento da acessibilidade desde a concepção**
- **Contraste e legibilidade de textos e interfaces.**
- **Estrutura de navegação clara e consistente.**
- **Linguagem clara e objetiva, com apoio visual e contextual.**
- **Compatibilidade com tecnologias assistivas.**
- **Uso adequado de marcação semântica (cabeçalhos, listas, tabelas, formulários).**

Essas diretrizes estão incorporadas nas seções sobre estrutura, conteúdo textual, apresentação visual e compatibilidade técnica.

### 🔹 Diretrizes da ABNT para conteúdos acessíveis

Além da NBR 17225, a ABNT também aponta boas práticas voltadas à produção de conteúdos acessíveis. Essas orientações reforçam a importância de:

- Utilizar contrastes adequados e tipografia legível;
- Escrever com linguagem simples, direta e inclusiva;
- Organizar as informações com títulos bem estruturados;
- Usar corretamente listas, tabelas e formulários com rótulos claros;
- Evitar o uso exclusivo de cor como meio de transmitir informação.

Essas práticas estão refletidas nas seções sobre estrutura semântica, links, botões, formulários e conteúdo textual.

---

Esses conceitos e diretrizes foram aplicados de forma integrada ao longo deste pocket para orientar desenvolvedores na criação de sistemas mais acessíveis e inclusivos.

**Baseado na WCAG 2.2, NBR 17225:2025 e diretrizes da ABNT**

> Este guia é um material de referência, prático e atualizado para promover acessibilidade digital em projetos web, sistemas e conteúdos. Ele unifica recomendações internacionais (WCAG 2.2) e brasileiras (NBR 17225:2025), orientando para a criação de experiências inclusivas, acessíveis e universais.

## 🆕 Novidades na WCAG 2.2 (Destaques Importantes)

### 🔷 Critérios Novos:

- [ ] **2.4.11 – Foco Não Oculto (AA)**  
       O foco de teclado deve estar sempre visível e nunca ser encoberto por outros elementos.

- [ ] **2.4.12 – Aparência do Foco (AAA)**  
       O foco deve ser altamente visível, com contraste mínimo de 3:1 e uma área mínima destacada.

- [ ] **2.5.7 – Alternativa ao Arrastar (AA)**  
       Qualquer função que exija arrastar (ex.: sliders, calendários) deve oferecer alternativa, como cliques ou setas.

- [ ] **2.5.8 – Alvo Tamanho Mínimo (AA)**  
       Áreas de clique devem ter pelo menos **24x24 pixels CSS**, salvo exceções.

- [ ] **3.2.6 – Consistência da Ajuda (A)**  
       Recursos de ajuda (suporte, FAQs, contatos) devem estar disponíveis de forma consistente em todas as páginas.

- [ ] **3.3.7 – Mecanismo de Entrada Reduzida (A)**  
       Processos que exigem entrada de texto devem ter formas de simplificação, como copiar e colar, preenchimento automático ou métodos alternativos.

### ❌ Critério Removido:

- **4.1.1 – Parsing**  
  🔻 Removido por obsolescência. Embora não seja mais obrigatório, manter código bem estruturado e semanticamente correto continua sendo uma boa prática.

## Checklist - 🧩 Novidades da NBR 17225:2025

## Estrutura da Norma

Segue as diretrizes internacionais WCAG 2.2, adaptadas para o Brasil.

Organizada em cerca de 146 requisitos (alguns obrigatórios, outros recomendados).

## Regras de Espaçamento (Textos)

- [ ] Espaço entre linhas deve ser de pelo menos 1,5 vezes o tamanho da fonte.
- [ ] Espaço entre parágrafos deve ser no mínimo 2 vezes o tamanho da fonte.
- [ ] Espaço entre letras deve ter, no mínimo, 0,12 vezes o tamanho da fonte.
- [ ] Espaço entre palavras deve ter, no mínimo, 0,16 vezes o tamanho da fonte.
- [ ] Deve existir opção para que o usuário ajuste esses espaçamentos, se necessário.

## Contraste de Cores

- [ ] Contraste entre o texto e o fundo deve ser de pelo menos 4,5:1 para textos normais e 3:1 para textos grandes.
- [ ] Recomenda-se contraste maior (7:1) sempre que possível.
- [ ] Componentes de interface devem ter contraste de pelo menos 3:1 em relação ao fundo.
- [ ] Indicadores de foco (quando algo é selecionado) também devem ter contraste mínimo de 3:1.
- [ ] Gráficos importantes precisam ter contraste mínimo de 3:1.

## Navegação e Acessibilidade na Prática

- [ ] Todo o site deve ser acessível apenas com o uso do teclado.
- [ ] Os elementos interativos devem ter área de toque mínima de 24x24 pixels ou equivalente.
- [ ] Nenhuma mudança de página ou pop-up deve acontecer sem ação direta do usuário.

## Textos e Conteúdos

- [ ] Cada página deve ter um título claro e bem definido.
- [ ] O idioma da página e de partes específicas deve ser corretamente informado no código.
- [ ] Marcação semântica deve ser usada corretamente (exemplo: títulos, listas, citações).
- [ ] O usuário deve conseguir ampliar o texto em até 200% sem que o conteúdo "quebre".
- [ ] Os textos devem ter largura máxima de 80 caracteres por linha (ou 40 para idiomas asiáticos).
- [ ] Recomenda-se linguagem clara e objetiva, explicação de siglas e boa estruturação dos conteúdos.

## Imagens e Mídias

- [ ] Todas as imagens devem ter uma descrição textual (atributo "alt").
- [ ] Vídeos devem ter legendas, audiodescrição e, quando possível, tradução em Libras.

## Formulários e Botões

- [ ] Todos os campos de formulários devem ter rótulos claros e fáceis de entender.
- [ ] A semântica correta deve ser usada para identificar botões e campos.

## Uso Sem Mouse

- [ ] Todo o conteúdo e funcionalidades devem estar acessíveis apenas com o teclado, sem necessidade do mouse.

## Tecnologias Avançadas

- [ ] Se houver captchas, eles devem oferecer alternativas acessíveis (como desafios simples ou em áudio).
- [ ] Recursos como biometria ou reconhecimento facial devem ter instruções acessíveis.

## Boas Práticas de Gestão e Design

- [ ] Recomenda-se aplicar princípios de design inclusivo durante o desenvolvimento do site.
- [ ] Equipes devem adotar boas práticas de gestão para garantir a acessibilidade.

## Checklist Interno e Cumprimento Legal

Um checklist interno deve ser utilizado para verificar o cumprimento dos requisitos.

A norma é obrigatória para sites de órgãos públicos e empresas que prestam serviços para o governo.

## 📚 Referências

- 🔗 [WCAG 2.2 – Tradução oficial W3C Brasil](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/)
- 🔗 [NBR 17225:2025 – Acessibilidade em Conteúdo e Aplicações Web (ABNT)](https://www.abntcatalogo.com.br)
- 🔗 [Documentação oficial do W3C](https://www.w3.org/WAI/standards-guidelines/wcag/)
