# HTML5

É uma linguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântico (utilizar as tag`s de forma correta);
- Estrutura

## TAGS

- `<! --...-->`: Comentário no HTML
- `<!DOCTYPE html>`: Informa ao navegador que está utilizando HTML5;
- `title`: Título do documento;

```
<title>Título do site</title>
```

- `html`: Define um arquivo HTML;

```
<html></html>
```

- `head`: Área onde são colocadas as tags de descrição e importações;
- `body`: Área onde a estrutura de diagramação é definida;
- `header`: Define semânticamente uma área de cabeçalho;
- `nav`: Define semânticamente uma área de navegação;
- `menu`: Especifica uma lista de menus;
- `main`: Especifica a área de conteúdo principal de um documento HTML.;
- `article`: Especifica um artigo;
- `aside`: Representadas como barras laterais. ;
- `footer`: Rodapé da página;
- `div`: Seção em um documento;
- `dl`: description list (Lista de definição) - descrever algo como se fosse a div;
- `dt`: description title (Termo de definição) - título do que eu estou descrevendo - padrão display:block;
- `dd`: define description - definindo o que eu estrou escrevendo
- `h1`...`h6`: Define semânticamente um título de alta importância (headeing 1 a 6);
- `p`: parágrafo;
- `ul`: Lista não ordenada;
- `ol`: Lista ordenada;
- `li`: Item da lista;
- `<a>`: Link (a = anchor);
  Utilizado para colocar um link para outra página ou que leva para um ponto da página atual. Usar essa tag junto com o atributo `href`.
  Exemplo de um `a` que o usuário é direcionado para o site da callabcode.training

```
<a href="http://collabcode.training">CollabCode.Training</a>
```

- `span`: Seção em um documento;
- `strong`: Texto forte;
- `small`: Texto pequeno;
- `figure`: Grupo de conteúdo de mídia e sua legenda;
- `figcaption`: Especifica a legenda para o figureelemento.;
- `img`: Imagem;
- `form`: Formulário;
- `fieldset`: Especifica um conjunto de campos;
- `legend`: Título em um conjunto de campos;
- `label`: Rótulo para um controle de formulário;
- `input`: Campo de entrada;
- `select`: Lista de seleção;
- `textarea`: Área de texto;
- `button`: Botão;

# CSS

É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:
A sintaxe do CSS é: seletor {propriedade: valor;}

- Visual;

## UNIDADES DE VALORES

- `px`: Unidade de pixels;
- `em`: Indicada para tamanhos de fontes;
- `%`: Unidade de porcentagens;
- `Hexadecimal`: Propriedades de cor;

## TAGS

-`background`: define a cor do fundo;

```
background:
background-color: define cor de fundo;
background-img: define imagem  no fundo;
background-attachment: define se a imagem fica fixa ou não enquanto rolamos a tela;
background-position: define onde a imagem de fundo é posicionada;
background-clip: define a área onde a imagem de fundo é aplicada;
background-origin: define a posição de origem da imagem em um elemento;
background-size: define as dimensões da imagem de fundo.
```

- `color`: define a cor;
- `button`: Botão;
- `inherit`: herdar do elemento pai;
- `font-family`: define a família da fonte;
- `font-size` (define o tamanho da fonte);
- `opacity` (opacidade - vai de 1 a 0);

- `float`: faz o elemento flutuar;

1 Valores:

- left: flutuar a esquerda;
- right: flutuar a direita;
- none: não flutuar;

```
float: { left; }
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
HTML -> id=""
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

- `Transition`: propriedade para fazer

```
transition: { propriedade tempo da animação tipo de animação; }
```

Exemplo:

```
transition: { color 200ms linear; }
```

\* duração
s- segundos
ms - milisegundos

\* como a animação funciona
ease - especifica um efeito de transição com um início lento, depois rápido e termina lentamente (este é o padrão)
linear - especifica um efeito de transição com a mesma velocidade do início ao fim
ease-in - especifica um efeito de transição com um início lento
ease-out - especifica um efeito de transição com um final lento
ease-in-out - especifica um efeito de transição com início e fim lentos
cubic-bezier(n,n,n,n) - permite definir seus próprios valores em uma função cúbica-bezier

# JAVASCRIPT

let
const
document
textContent

- `querySelector`: ;
- `querySelectorAll`: ;
- `addEventListener`: ;
- `click`: ;
- `function`: ;
- `key`: ;
- `positionLast`: ;
- `this`: ;
- `classList`: ;
- `toggle`: ;
- `remove`: ;
- `add`: ;
- ``: ;
- ``: ;
