const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')
const closeModalButton = document.querySelector('#closeModal')


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
    clearTimeout(timer)
    showModal()
}

const resetGame = () => {
    window.location.reload()
}

const showModal = () => {
    const finalScore = document.querySelector('.final-score');
    finalScore.textContent = score;
 const modalMessage = document.querySelector('#modalMessage');

 if (score >= 200) {
    modalMessage.textContent = 'Wow! Youre a wizard!';
 } else if (score >= 100) {
    modalMessage.textContent = 'Decent, but you can do better champ.';
 } else {
    modalMessage.textContent = 'You really need to practice more..';
 }

    document.querySelector('.overlay').style.display = 'block';
}

const closeModal = () => {
    document.querySelector('.overlay').style.display = 'none';
    resetGame ();
}

endButton.style.display = "none";
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    endButton.style.display = "block";
    endButton.style.marginLeft = "auto";
    endButton.style.marginRight = "auto";
    });

    
startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeModalButton.addEventListener('click', closeModal)
