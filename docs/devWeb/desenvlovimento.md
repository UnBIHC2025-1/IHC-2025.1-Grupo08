# Desenvolvimento

Nesta etapa, é essencial que a equipe de desenvolvimento saiba como aplicar acessibilidade nos projetos.  
Também é importante que todos conheçam as ferramentas disponíveis no mercado para realizar testes e garantir que as boas práticas de acessibilidade sejam seguidas.

Além disso, a equipe deve entender como as pessoas com deficiência usam sites e aplicativos, para que as soluções desenvolvidas realmente atendam às necessidades desses usuários.

Neste ponto, o foco está tanto nas técnicas de desenvolvimento acessível quanto nas formas de verificar se elas foram aplicadas corretamente.

## Checklist de Acessibilidade Digital

### Imagens

- [ ] Adicionar texto alternativo (alt) para imagens, botões-imagem, gráficos e mapas com pontos de acesso. (A)
- [ ] Usar `alt=""` para imagens meramente decorativas, sem significado. (A)
- [ ] Incluir no atributo alt a descrição de imagens que contêm texto. (A)
- [ ] Garantir que todas as imagens relevantes tenham texto alternativo que descreva a informação apresentada. (A) [NBR]
- [ ] Garantir que todas as imagens funcionais tenham texto alternativo que descreva sua função. (A) [NBR]
- [ ] Usar apenas imagens de texto que sejam essenciais ou personalizáveis, sempre com texto alternativo igual ao conteúdo. (AA) [NBR]

### Botões e Controles

- [ ] Adicionar estado de foco visível em campos, botões e elementos interativos. (AA)
- [ ] Adicionar `type="button"` em botões. (A)
- [ ] Garantir que todos os botões possuam texto, texto alternativo ou nome acessível que indique sua função. (AA) [NBR 5.8.3]
- [ ] Utilizar botões apenas para acionar funcionalidades. (A) [NBR]
- [ ] Garantir identificação consistente de componentes que se repetem com a mesma funcionalidade. (AA) [NBR 5.8.4]
- [ ] Fornecer controle para pausar, parar ou silenciar áudio que inicia automaticamente e dura mais de 3 segundos. (A) [NBR 5.14.7]
- [ ] Disponibilizar alternativa para realizar ações de "arrastar e soltar" com clique ou toque simples. (AA)

### Links

- [ ] Evitar links com textos iguais que levem para destinos diferentes. (AAA) [NBR 5.7.5]
- [ ] Informar quando um link leva a site externo. (AAA) [NBR 5.7.9]
- [ ] Indicar o formato e o tamanho dos arquivos em links para download. (AAA) [NBR 5.7.7]
- [ ] Evitar repetir no texto ou no texto alternativo do link uma informação já presente no texto ao redor. (A) [NBR 5.7.9]
- [ ] Não ter links adjacentes com o mesmo destino. (A) [NBR 5.7.10]
- [ ] Incluir mecanismos para contornar blocos de conteúdo repetitivos. (A) [NBR 5.7.11]
- [ ] Disponibilizar mais de uma maneira de localizar uma página. (AA) [NBR 5.7.13]
- [ ] Manter a ordem consistente dos mecanismos de navegação entre as páginas. (AA) [NBR 5.7.15]

### Formulários

- [ ] Garantir que todos os campos de formulário possuam rótulos ou nomes acessíveis. (A) [NBR 5.9.1]
- [ ] Associar rótulos aos campos de forma programática. (A) [NBR 5.9.3]
- [ ] As mensagens de erro devem descrever claramente o erro e identificar o campo afetado. (A) [NBR 5.9.9]
- [ ] Utilizar `aria-describedby` nos campos de entrada, quando necessário. (A)
- [ ] Mensagens de erro e sucesso devem ser perceptíveis além do visual. (A)
- [ ] Evitar solicitar novamente informações já fornecidas, oferecendo preenchimento automático ou seleção. (A)
- [ ] Posicionar textos de ajuda de forma previsível em relação aos campos. (A) [NBR 5.9.5]
- [ ] Agrupar programaticamente campos relacionados. (A) [NBR 5.9.6]
- [ ] Identificar todos os campos obrigatórios. (A) [NBR 5.9.7]

### Semântica

- [ ] Utilizar elementos HTML nativos com semântica adequada. (A)
- [ ] Garantir que botões tenham rótulos claros e compreensíveis. (AA)
- [ ] Ter no máximo uma região do tipo header/banner, main ou footer/contentinfo por página. (AAA)
- [ ] Definir o idioma da página de forma programada. (AA) [NBR 5.13.2]
- [ ] Atribuir título descritivo e único a todos os frames/iframes. (A) [NBR 5.13.4]
- [ ] Manter a ordem do código lógica e intuitiva. (A) [NBR 5.13.6]
- [ ] Garantir nome acessível a todos os componentes que exigem identificação. (A) [NBR 5.13.10]

### Teclado

- [ ] Garantir que todas as funcionalidades possam ser acessadas pelo teclado. (A)
- [ ] Assegurar que funções ativadas por mouseover também estejam acessíveis pelo teclado. (A)
- [ ] Todos os elementos focáveis devem estar totalmente visíveis ao receber foco. (AAA) [NBR 5.1.2]
- [ ] O indicador de foco deve ter pelo menos 2px de espessura ao redor do componente focado. (AAA)
- [ ] Conteúdos com movimento devem permitir pausar, parar, ocultar, oferecer navegação por teclado e informar transições. (A)
- [ ] Nenhuma parte do componente focado deve ser encoberta por elementos sobrepostos. (AAA)
- [ ] Utilizar seletores `.hover` e `.focus` para tornar o foco visível. (AA) [NBR 5.1.1]
- [ ] Permitir navegação com atalhos como TAB. (A)
- [ ] O primeiro item interativo deve ser um link para o conteúdo principal. (A)

### Títulos

- [ ] Definir hierarquia de títulos com base no significado, não no tamanho visual. (A) [NBR 5.13.6]
- [ ] Usar elementos de título (`h1`, `h2`, `h3`, etc.) para estruturar o conteúdo. (AAA) [NBR 5.3.5]
- [ ] Não pular níveis de título logicamente. (AA) [NBR 5.7.15]
- [ ] Cada página deve ter um único título principal (`h1`). (AAA) [NBR 5.3.5]

### Tabelas

- [ ] Utilizar a tag `<table>` apenas para tabelas de dados. (A) [NBR 5.6.1]
- [ ] Inserir cabeçalhos de tabela com o atributo `scope` correto. (A) [NBR 5.6.3]
- [ ] Usar o elemento `<caption>` para fornecer um título à tabela. (AAA) [NBR 5.6.4]
- [ ] Garantir que todas as tabelas possuam título ou legenda que as identifique. (AAA) [NBR 5.6.4]
- [ ] Associar programaticamente os títulos e legendas às respectivas tabelas. (A) [NBR 5.6.5]
- [ ] Fornecer descrição textual para tabelas complexas. (AAA) [NBR 5.6.6]

### Modais

- [ ] Permitir que os modais sejam facilmente fechados. (AAA)
- [ ] Permitir o uso da tecla `Esc` para fechar modais. (AAA)
- [ ] Evitar modais que ocupem a tela inteira. (AAA)

### Visualização

- [ ] O site deve funcionar em qualquer orientação (paisagem ou retrato). (AA) [NBR 5.10.3]
- [ ] O conteúdo deve permanecer acessível em áreas de pelo menos 320px x 256px, salvo quando o layout bidimensional for essencial. (AA) [NBR 5.10.4]

---

## Referência Bibliográfica

## Referências

1. [WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Acesso em: 9 mai. 2024.
2. [WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html). Acesso em: 9 mai. 2024.
3. [WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 mai. 2024.
4. [WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Acesso em: 9 mai. 2024.
5. [WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 mai. 2024.
6. [WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). Acesso em: 9 mai. 2024.
7. [WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html). Acesso em: 9 mai. 2024.
8. [WCAG 2.2 Understanding Docs. G201 Giving users advanced warning when opening a new window](https://www.w3.org/WAI/WCAG22/Techniques/general/G201). Acesso em: 9 mai. 2024.
9. [WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html). Acesso em: 9 mai. 2024.
10. [WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). Acesso em: 9 mai. 2024.

## Bibliografia

- [Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2 – W3C Brasil (Tradução Oficial)](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/). Acesso em: 7 jun. 2025.
- [DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023.](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 mai. 2024.
- [ABNT NBR 17225:2025. Acessibilidade em conteúdo e aplicações web – Requisitos.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf). Acesso em: 7 jun. 2025.
