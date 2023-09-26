const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')

const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')

let score = 0;


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
    console.log("Game started");
}
const endGame = () => {
    console.log("End game");
}


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)