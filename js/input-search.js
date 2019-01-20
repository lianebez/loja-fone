const $inputSearch = document.querySelector(".input-search"); //a constante "inputSearch" pega o elemento, dentro do HMTL que tem a class "input-search" -> pega o form.input-search dentro do HMTL
const $open = $inputSearch.querySelector(".-open"); //a constante "open" pegar o elemento que tem a class "-open" (input) dentro da constant "inputSearch" que é o elemento que tem a class "input-search" (form) -> pego o input.-open dentro do form
const $close = $inputSearch.querySelector(".-close"); //a constante "close" pegar o elemento que tem a class "-close" (input) dentro da constant "inputSearch" que é o elemento que tem a class "input-search" (form) -> pego o input.-close dentro do form

$open.addEventListener("click", event => {
  event.preventDefault(); //evitar evento padrão (recarregar página)

  $inputSearch.classList.toggle("-active"); //remove/adiciona a class -active do form
  $open.classList.remove("-active"); //remove a class -active do input.open
  $close.classList.add("-active"); //adiciona a class -active do input.close
});

$close.addEventListener("click", event => {
  event.preventDefault();

  $inputSearch.classList.toggle("-active");
  $close.classList.remove("-active");
  $open.classList.add("-active");
});
