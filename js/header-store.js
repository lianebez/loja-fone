const $search = document.querySelector("[type=search]");

/*$search.addEventListener("click", () => {
  $search.classList.toggle("-active");
});*/

// pode ser resumido assim
$search.addEventListener("click", () => $search.classList.toggle("-active"));

/*
pegar a busca - > constante
adcionar e remover (toggle) a classe da constante =>type=search

*/
