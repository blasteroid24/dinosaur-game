const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");

let score = 0;
let hasScored = false;


document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 500);
    }
}

let isAlive = setInterval(function () {
    // Get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // Get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Check for collision
    if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {

        alert("Game Over!");
        resetGame();
    } else if (cactusLeft < 50 && !hasScored) {

        score += 10;
        scoreDisplay.innerHTML = `Score: ${score}`;
        hasScored = true;
    }


    if (cactusLeft <= 0) {
        hasScored = false;
    }
}, 10);

function resetGame() {
    score = 0;
    scoreDisplay.innerHTML = `Score: ${score}`;
}
