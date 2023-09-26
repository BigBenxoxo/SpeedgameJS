const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')

const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')

// Global variables 
let score = 0;
let timer;
let pace = 1000;
let active = 0;
let rounds = 0;
// Global variables

  const getRndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(getRndInt(0, 3));



const clickCircle = (i) => {
if (i !== active) {
   return endGame()
}
rounds--
    score += 10
    scoreDisplay.textContent = score;
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))
})
const enableEvents = () => {
    circles.forEach(circle => {
        circle.style.pointerEvents = "auto"
    })
}

const startGame = () => {
    if (rounds >= 3){
        return endGame()
    }


enableEvents();
    const newActive = pickNew(active)

circles[newActive].classList.toggle('active')
circles[active].classList.remove('active')

    active = newActive;

    timer = setTimeout(startGame, pace)

    pace -= 10
    rounds++
    
    
    function pickNew(active) {
      const newActive = getRndInt(0, 3)
      if (newActive !== active) {
        return newActive
      }
        return pickNew(active)
    }
    console.log(active);
}
const endGame = () => {
    console.log("Game ended");
    clearTimeout(timer)
    resetGame();
}

const resetGame = () => {
    window.location.reload()
}


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)