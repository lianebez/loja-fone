/* 
1 - Ter a janela (browser) na mão => OK (window)
2 - Ter o HTML na mão => OK (document)
3 - Pegar o coração => OK (window.document.querySelector(".-heart");)
4 - pegar o clique no coração
5 - No momento que o usuário clicar nós queremos mostrar um texto AE
*/

const $heart = window.document.querySelector(".-heart");
//O que estamos atribuindo para a variável? entrando dentro do window, entrando dentro do document, dentro do document estamos procurando o coraocao
// atribuição se faz com igual
// tag html sempre colocar $ na frente pra melhor legibilidade

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("ae");
}

// addEventListener => add ouvinte de evento
// evento => qualquer coisa que o usuário faça (click, arrastar, excrever)

