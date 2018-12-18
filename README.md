# HTML5

É uma linguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântico (utilizar as tag`s de forma correta);
- Estrutura

## TAGS

- `<!DOCTYPE html>`: Informa ao navegador que está utilizando HTML5;
- `html`: Define um arquivo HTML;
- `head`: Área onde são colocadas as tags de descrição e importações
- `body`: Área onde a estrutura de diagramação é definida;
- `header`: Define semânticamente uma área de cabeçalho;
- `h1`: Define semânticamente um título de alta importância (headeing 1 a 6);
- `nav`: Define semânticamente uma área de navegação;
- `ul`:
- `<a>`: Link (a = anchor)
  Utilizado para colocar um link para outra página ou que leva para um ponto da página atual. Usar essa tag junto com o atributo `href`.
  Exemplo de um `a` que o usuário é direcionado para o site da callabcode.training:

```
<a href="http://collabcode.training">CollabCode.Training</a>
```

-`dl`: description list - descrever algo como se fosse a div

-`dt`: description title - título do que eu estou descrevendo - padrão display:block

-`dd`: define description - definindo o que eu estrou escrevendo

<!DOCTYPE html>: Informa ao navegador que está utilizando HTML5;

html: Define um arquivo HTML;
head: Área onde são colocadas as tags de descrição e importações
body: Área onde a estrutura de diagramação é definida;
header: Define semânticamente uma área de cabeçalho;
h1: Define semânticamente um título de alta importância;
nav: Define semânticamente uma área de navegação;
a: De anchor("âncora"), utilizado para colocar um link para outra página ou que leva para um ponto da página atual.

# CSS

É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual;

-`background` (define a cor do fundo)

```
background:
background-color:
background-img:
```

-`color` (define a cor)

-`inherit` (herdar do elemento pai)

-`font-family` (define a família da fonte)

-`font-size` (define o tamanho da fonte)

-`opacity` (opacidade - vai de 1 a 0)

- Float (flutuar)

```
float: left - esquerda
float: right - direita
```

- `overflow`(recalcular o contexto)

Esconde elemento maior que o conteúdo

```
overflow: hidden;
```

- `margin` (respiro externo)

```
margin: top right bottom left
margin: top/bottom right/left
margin: top right/left bottom
margin: top/right/bottom/left
```

- `padding` (respiro interno)

```
padding: top right bottom left
padding: top/bottom right/left
padding: top right/left bottom
padding: top/right/bottom/left
```

Seletores

- Tag

```
a, p, span, header, footer, h1, button, div, figure, img, form ...
```

- Id (um por página)

```
HHTML -> id=""
CSS -> #
```

- Class (pode usar vérias vezes na mesma página)

```
HTML -> class=""
CSS -> .

```

- Display

\*inline (Deixa os elementos na mesma linha mas não cosneguimos definir width e hight) - ganha o comportamento de uma palavra (conteúdo)

\*block (Não deixa na mesma linha mas conseguimos definir width e hight)

\*inline-block (Deica os elementos na mesma linha e conseguimos definir width e hight) - ganha o comportamento de uma palavra (conteúdo)

Funciona o vertical-align quando tem display inline um ao lado do outro (padrão baseline [texto do botão] top)

\*inline-flex; ()
\*inline-table; ()

```
display: inline;
display: block;
display: inline-block;
display: inline-flex;
display: inline-table;
```

- Position

\*absolute (cria um novo contexto. O que define a largura e a altura é o conteúdo. Top, bottom, left e right pode mexar com relação a página)

\*relative ()

\*fixed ()

```
top bottom => eixo x
left right => eixo y



top: valor
bottom: valor
left: valor
right: valor
```

- Box-sizing

borer-box - subtrai a borda do tamanho totoal do botão. calcula a borda fazendo parte da largura e altura

content-box -

- Variação

toda classe que comça com "-" é uma variação. precisa de uma base, depois dessa base você adiciona um recurso que vai fazer uma difernca com a base.
exemplo: button-store
ao invés de button-store-second deixa apenas button-store.-second

css vai procurar um elemento na página que tenha a classe button-store e também a classe -second [tem que ter as 2 classes]

no html fica class="button-store -second"
