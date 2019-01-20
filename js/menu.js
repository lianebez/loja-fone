const $menu = document.querySelector(".menu");
const $icon = $menu.querySelector(".icon")

$icon.addEventListener("click", () => {
    $menu.classList.toggle("-active");
});