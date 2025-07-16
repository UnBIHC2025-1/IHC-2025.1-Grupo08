## Desenvolvimento Web

Aqui, focamos nos alicerces técnicos do seu projeto. Acessibilidade na programação garante que a interação, a navegação e a estrutura sejam robustas para todos os usuários, especialmente aqueles que usam tecnologias assistivas.

### Checklist de Desenvolvimento Web

**Interação por Teclado**

- [ ] Indicador de foco visível em todos os elementos focáveis. [ABNT NBR 17225:2025, 5.1.1 (Requisito); WCAG 2.2, C.S. 2.4.7 (AA)]
- [ ] Elemento em foco pelo menos parcialmente visível quando recebe foco, considerando sobreposição por elementos do desenvolvedor. [ABNT NBR 17225:2025, 5.1.3 (Requisito); WCAG 2.2, C.S. 2.4.11 (AA)]
- [ ] Ordem de foco previsível em todos os elementos focáveis, em sequência lógica e intuitiva, consistente com a apresentação e preservando significado e operabilidade. [ABNT NBR 17225:2025, 5.1.4 (Requisito); WCAG 2.2, C.S. 2.4.3 (A)]
- [ ] Ausência de componentes que bloqueiam, impedem ou interrompem a navegação por teclado (armadilha de foco). [ABNT NBR 17225:2025, 5.1.6 (Requisito); WCAG 2.2, C.S. 2.1.2 (A)]
- [ ] Conteúdo adicional exibido por foco do teclado ou posicionamento do cursor permanece visível até que o usuário retire o foco, ou o dispense, ou a informação deixe de ser válida. [ABNT NBR 17225:2025, 5.1.8 (Requisito); WCAG 2.2, C.S. 1.4.13 (AA)]
- [ ] Conteúdo adicional exibido por foco do teclado ou posicionamento do cursor pode ser dispensado sem retirar o foco ou reposicionar o cursor; ou comunica um erro de entrada, ou não oculta/substitui outro conteúdo. [ABNT NBR 17225:2025, 5.1.9 (Requisito); WCAG 2.2, C.S. 1.4.13 (AA)]
- [ ] Mecanismo simples para desativar ou remapear atalhos de teclado sem tecla modificadora, ou o atalho só é acionado quando um componente específico está em foco. [ABNT NBR 17225:2025, 5.1.11 (Requisito); WCAG 2.2, C.S. 2.1.4 (A)]
- [ ] Todas as funcionalidades da página que não são acessíveis pelo teclado não admitem modo de operação equivalente utilizando somente o teclado (ex: desenho à mão livre). [ABNT NBR 17225:2025, 5.1.13 (Requisito); WCAG 2.2, C.S. 2.1.1 (A)]
- [ ] Instruções para operação em componentes customizados que exigem interações complexas e comportamento não previsível. [ABNT NBR 17225:2025, 5.1.16 (Requisito); WCAG 2.2, C.S. 3.3.2 (A)]

  **Formulários e Entrada de Dados**

  - [ ] Rótulos de campo presentes em todos os campos de formulário; ou o campo possui propósito visualmente evidente e nome acessível que o identifica. [ABNT NBR 17225:2025, 5.9.1 (Requisito); WCAG 2.2, C.S. 3.3.2 (A), C.S. 4.1.2 (A)]
  - [ ] Rótulos posicionados de maneira previsível em relação aos respectivos campos de formulário. [ABNT NBR 17225:2025, 5.9.2 (Requisito); WCAG 2.2, C.S. 1.3.2 (A), C.S. 3.3.2 (A)]
  - [ ] Rótulos associados aos respectivos campos de formulário de forma programaticamente determinada. [ABNT NBR 17225:2025, 5.9.3 (Requisito); WCAG 2.2, C.S. 1.3.1 (A)]
  - [ ] Textos de ajuda posicionados de maneira previsível em relação aos campos do formulário. [ABNT NBR 17225:2025, 5.9.5 (Requisito); WCAG 2.2, C.S. 3.3.2 (A)]
  - [ ] Campos de entrada relacionados possuem agrupamento determinado programaticamente. [ABNT NBR 17225:2025, 5.9.6 (Requisito); WCAG 2.2, C.S. 1.3.1 (A)]
  - [ ] Campos obrigatórios devidamente identificados de forma perceptível a todos. [ABNT NBR 17225:2025, 5.9.7 (Requisito); WCAG 2.2, C.S. 3.3.2 (A)]
  - [ ] Tipo de dado de todos os campos de entrada determinado programaticamente. [ABNT NBR 17225:2025, 5.9.8 (Requisito); WCAG 2.2, C.S. 1.3.5 (AA)]
  - [ ] Mensagens de erro descrevem em texto qual é o erro e identificam qual é o campo com erro. [ABNT NBR 17225:2025, 5.9.9 (Requisito); WCAG 2.2, C.S. 3.3.1 (A)]
  - [ ] Mensagens de erro fornecem sugestões de correção de entrada de dados, quando conhecidas; ou a sugestão de correção colocaria em risco a segurança ou o propósito do conteúdo. [ABNT NBR 17225:2025, 5.9.10 (Requisito); WCAG 2.2, C.S. 3.3.3 (AA)]
  - [ ] Formulários críticos permitem uma forma de reverter, verificar ou confirmar os dados. [ABNT NBR 17225:2025, 5.9.12 (Requisito); WCAG 2.2, C.S. 3.3.4 (AA)]
  - [ ] Campos de entrada que exigem dados previamente inseridos são preenchidos automaticamente ou estão disponíveis para seleção; ou a reentrada é essencial/necessária por segurança/informação inválida. [ABNT NBR 17225:2025, 5.9.15 (Requisito); WCAG 2.2, C.S. 3.3.7 (A)]
  - [ ] Método de validação que exige percepção ou capacidade motora específica possui uma alternativa sem a mesma exigência. [ABNT NBR 17225:2025, 5.9.16 (Requisito); WCAG 2.2, C.S. 1.1.1 (A), C.S. 2.5.4 (A), C.S. 2.5.6 (AAA)]
  - [ ] Ausência de testes de função cognitiva em processos de autenticação; ou método de autenticação alternativo sem teste de função cognitiva; ou mecanismo para auxiliar o usuário a completar o teste; ou o teste é reconhecimento de objetos/identifica conteúdo não textual fornecido pelo usuário. [ABNT NBR 17225:2025, 5.9.18 (Requisito); WCAG 2.2, C.S. 3.3.8 (AA)]

  **Codificação e Marcação Semântica**

  - [ ] Página possui um título único em relação às demais páginas do site, que a identifica. [ABNT NBR 17225:2025, 5.13.1 (Requisito); WCAG 2.2, C.S. 2.4.2 (A)]
  - [ ] Idioma da página declarado de forma programaticamente determinada. [ABNT NBR 17225:2025, 5.13.2 (Requisito); WCAG 2.2, C.S. 3.1.1 (A)]
  - [ ] Idioma das partes da página que possuem idioma diferente do principal declarado de forma programaticamente determinada; ou o texto é um nome próprio, termo técnico, palavra em idioma indeterminado, ou frase estrangeira incorporada ao vernáculo. [ABNT NBR 17225:2025, 5.13.3 (Requisito); WCAG 2.2, C.S. 3.1.2 (AA)]
  - [ ] Todo frame ou iframe possui um título único que o identifica. [ABNT NBR 17225:2025, 5.13.4 (Requisito); WCAG 2.2, C.S. 1.3.1 (A), C.S. 4.1.2 (A)]
  - [ ] Recurso de zoom do agente de usuário não bloqueado. [ABNT NBR 17225:2025, 5.13.5 (Requisito); WCAG 2.2, C.S. 1.4.4 (AA), C.S. 1.4.10 (AA)]
  - [ ] Ordem dos elementos no código é lógica e intuitiva, preservando significado e operabilidade. [ABNT NBR 17225:2025, 5.13.6 (Requisito); WCAG 2.2, C.S. 1.3.2 (A)]
  - [ ] Nome acessível dos componentes igual ao texto visível do componente ou de seu rótulo; ou o nome acessível contém o texto visível, preferencialmente no início. [ABNT NBR 17225:2025, 5.13.7 (Requisito); WCAG 2.2, C.S. 2.5.3 (A)]
  - [ ] Mensagens de status determinadas programaticamente, sem necessidade de foco para usuários de tecnologia assistiva. [ABNT NBR 17225:2025, 5.13.8 (Requisito); WCAG 2.2, C.S. 4.1.3 (AA)]
  - [ ] Componentes que requerem identificação por nome possuem um nome acessível. [ABNT NBR 17225:2025, 5.13.10 (Requisito); WCAG 2.2, C.S. 4.1.2 (A)]
  - [ ] Componentes customizados possuem semântica (função, estados, propriedades, valores) determinada programaticamente, incluindo suas alterações. [ABNT NBR 17225:2025, 5.13.12 (Requisito); WCAG 2.2, C.S. 1.3.1 (A), C.S. 4.1.2 (A)]
  - [ ] Estados, propriedades e valores de componentes de interface de usuário que podem ser definidos pelo usuário, permitem que esses atributos sejam definidos programaticamente. [ABNT NBR 17225:2025, 5.13.13 (Requisito); WCAG 2.2, C.S. 4.1.2 (A)]

  **Áudio e Vídeo**

  - [ ] Alternativa em texto que transcreve todo o conteúdo de áudio pré-gravado; ou o áudio é alternativa para vídeo sem áudio/texto e está identificado. [ABNT NBR 17225:2025, 5.14.1 (Requisito); WCAG 2.2, C.S. 1.2.1 (A)]
  - [ ] Legendas descritivas disponíveis para todo vídeo com áudio pré-gravado, equivalentes ao conteúdo do áudio; ou o vídeo é alternativa para texto e está identificado. [ABNT NBR 17225:2025, 5.14.2 (Requisito); WCAG 2.2, C.S. 1.2.2 (A)]
  - [ ] Audiodescrição para todo o conteúdo visual em vídeos pré-gravados; ou o áudio original é suficiente para a compreensão do vídeo sem o uso da visão. [ABNT NBR 17225:2025, 5.14.4 (Requisito); WCAG 2.2, C.S. 1.2.1 (A), C.S. 1.2.3 (A), C.S. 1.2.5 (AA)]
  - [ ] Ausência de áudio que toque automaticamente por mais de 3s; ou mecanismo para pausar, parar, silenciar ou ajustar o volume sem afetar o volume geral do sistema. [ABNT NBR 17225:2025, 5.14.7 (Requisito); WCAG 2.2, C.S. 1.4.2 (A)]
  - [ ] Legendas disponíveis para todo conteúdo em áudio ou áudio e vídeo ao vivo. [ABNT NBR 17225:2025, 5.14.9 (Requisito); WCAG 2.2, C.S. 1.2.4 (AA)]

  **Animação**

  - [ ] Ausência de animação que inicie automaticamente, dure mais que 5s e seja apresentada em paralelo com outro conteúdo; ou mecanismo para pausar, parar ou ocultar a animação; ou a animação é essencial. [ABNT NBR 17225:2025, 5.15.1 (Requisito); WCAG 2.2, C.S. 2.2.2 (A)]
  - [ ] Todo conteúdo que pisca está abaixo dos limites de flash geral e flash vermelho. [ABNT NBR 17225:2025, 5.15.4 (Requisito); WCAG 2.2, C.S. 2.3.1 (A)]

  **Tempo**

  - [ ] Mecanismo para desligar, ajustar ou estender o limite de tempo antes de atingi-lo; ou o limite de tempo é intrínseco ao conteúdo, essencial ou superior a 20h. [ABNT NBR 17225:2025, 5.16.2 (Requisito); WCAG 2.2, C.S. 2.2.1 (A)]
  - [ ] Ausência de atualização que inicie automaticamente e seja apresentada em paralelo com outro conteúdo; ou mecanismo para pausar, parar ou ocultar a atualização, ou controlar a frequência; ou a atualização é essencial. [ABNT NBR 17225:2025, 5.16.3 (Requisito); WCAG 2.2, C.S. 2.2.2 (A)]
  - [ ] Ausência de mudança de contexto previsível sem aviso no foco do teclado ou posicionamento do cursor. [ABNT NBR 17225:2025, 5.8.9 (Requisito); WCAG 2.2, C.S. 3.2.1 (A)]
  - [ ] Ausência de componentes que provocam mudança de contexto enquanto o usuário insere ou seleciona informações; ou o usuário é avisado sobre esse comportamento. [ABNT NBR 17225:2025, 5.8.10 (Requisito); WCAG 2.2, C.S. 3.2.2 (A)]
  - [ ] Acionamento por ponteiro único não acionado pelo pressionamento do ponteiro (down-event) ou mecanismo para interromper/desfazer; ou soltar o ponteiro reverte o acionamento; ou acionamento pelo pressionamento é essencial. [ABNT NBR 17225:2025, 5.8.11 (Requisito); WCAG 2.2, C.S. 2.5.2 (A)]
  - [ ] Funcionalidade operada por gestos multiponto ou baseados em caminhos pode ser operada também por ponteiro único sem gesto baseado em caminho; ou o gesto é essencial; ou a funcionalidade é determinada pelo agente de usuário. [ABNT NBR 17225:2025, 5.8.12 (Requisito); WCAG 2.2, C.S. 2.5.1 (A)]
  - [ ] Funcionalidade operada por movimento de arrastar pode ser operada também por ponteiro único sem arrastar; ou o movimento de arrastar é essencial; ou a funcionalidade é determinada pelo agente de usuário. [ABNT NBR 17225:2025, 5.8.13 (Requisito); WCAG 2.2, C.S. 2.5.7 (AA)]
  - [ ] Funcionalidade operada por movimento pode ser operada por componentes que não exigem esse modo, e a resposta aos movimentos pode ser desabilitada; ou mecanismo para operar o controle de movimento de outra forma; ou o movimento é essencial. [ABNT NBR 17225:2025, 5.8.14 (Requisito); WCAG 2.2, C.S. 2.5.4 (A)]
