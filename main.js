const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')

const circles = document.querySelectorAll('.circle')


const clickCircle = (i) => {
    console.log('Circle was clicked', i);
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