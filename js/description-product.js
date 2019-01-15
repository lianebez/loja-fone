const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const positionLast = $stars.length - 1;

$heart.addEventListener("click", handleClick);

$stars[0].addEventListener("click", firstStar);

$stars[1].addEventListener("click", function() {
  middleStar(1);
});

$stars[2].addEventListener("click", function() {
  middleStar(2);
});

$stars[3].addEventListener("click", function() {
  middleStar(3);
});

$stars[positionLast].addEventListener("click", lastStar);

function middleStar(index) {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });

  $stars.forEach(function($star, key) {
    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}

function lastStar(){
  $stars.forEach(function($star){
    $star.classList.add("-active");
  });
}

function handleClick (){
  this.classList.toggle("-active");
}