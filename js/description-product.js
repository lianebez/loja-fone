/* 
1 - Ter a janela (browser) na mão => OK (window)
2 - Ter o HTML na mão => OK (document)
3 - Pegar o coração => OK (window.document.querySelector(".-heart");)
4 - pegar o clique no coração
5 - No momento que o usuário clicar nós queremos mostrar um texto AE
*/

const $heart = document.querySelector(".-heart");
//const $firstStar = document.querySelectorAll(".star");
const $stars = document.querySelectorAll(".star");
//O que estamos atribuindo para a variável? entrando dentro do window, entrando dentro do document, dentro do document estamos procurando o coraocao
// atribuição se faz com igual
// tag html sempre colocar $ na frente pra melhor legibilidade

$heart.addEventListener("click", handleClickHeart);

//$firstStar.addEventListener("click", handleClickFirstStar);
$stars[0].addEventListener("click", handleClickStar0);
$stars[1].addEventListener("click", handleClickStar1);
$stars[2].addEventListener("click", handleClickStar2);
$stars[3].addEventListener("click", handleClickStar3);
$stars[4].addEventListener("click", handleClickStar4);

function handleClickHeart() {
  // if ($heart.classList.contains("-active")) {
  //   $heart.classList.remove("-active"); // quando tem a classe actiove
  // } else {
  //   $heart.classList.add("-active"); //quando Não tem a class active
  // }
  $heart.classList.toggle("-active");
}

// addEventListener => add ouvinte de evento
// evento => qualquer coisa que o usuário faça (click, arrastar, excrever)

//function handleClickStar() {
  //$firstStar.classList.toggle("-active");
//}

function handleClickStar0() {
  $stars[0].classList.toggle("-active");
}

function handleClickStar1 {
  $stars[1].classList.toggle("-active");
}

function handleClickStar2() {
  $stars[2].classList.toggle("-active");
}

function handleClickStar3() {
  $stars[3].classList.toggle("-active");
}

function handleClickStar4() {
  $stars[4].classList.toggle("-active");
}
