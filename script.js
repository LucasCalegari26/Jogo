const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let isJumping = false;

function jump() {
  if (isJumping) return;
  isJumping = true;
  dino.classList.add("jump");

  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 500);
}

function checkCollision() {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert("Game Over!");
    location.reload();
  }
}

setInterval(checkCollision, 10);

document.addEventListener("keydown", event => {
  if (event.code === "Space") {
    jump();
  }
});