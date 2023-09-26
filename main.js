const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')

const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')

let score = 0;
let timer;


  const getRndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(getRndInt(0, 3));



const clickCircle = (i) => {
    console.log('Circle was clicked', i);
    score += 10
    scoreDisplay.textContent = score;
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))
})


const startGame = () => {
    const newActive = pickNew()

    timer = setTimeout(startGame, 1000)
    
    function pickNew() {
      const newActive = getRndInt(0, 3)
        return console.log(newActive)
    }
}
const endGame = () => {
    console.log("Game ended");
    clearTimeout(timer)
}


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)