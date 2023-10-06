const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')
const closeModalButton = document.querySelector('#closeModal')
const mosqAudio = document.querySelector('#mosq')   
const gunAudio = document.querySelector('#gun')
const gameOver = document.querySelector('#gameover')
const mortalKombat = document.querySelector('#mortalkombat')
const instButton = document.querySelector('#instButton')
const instmodal = document.querySelector('#instmodal')
const closeinst = document.querySelector('#closeinst')


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
    gunAudio.pause();
    gunAudio.currentTime = 0;
    gunAudio.play();
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
    gameOver.play()
    setTimeout(() => {
        mortalKombat.play();
    }, 1000);
    
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
    modalMessage.style.color = 'green';
    modalMessage.textContent = 'You decimated those nasty demons, you rock!';
 } else if (score >= 90) {
    modalMessage.style.color = 'red';
    modalMessage.textContent = 'You just about escaped, scarred for life';
 } else {
    modalMessage.style.color = 'red';
    modalMessage.textContent = 'You were eaten alive..';
 }

    document.querySelector('.overlay').style.display = 'flex';
}

const closeModal = () => {
    document.querySelector('.overlay').style.display = 'none';
    resetGame ();
}

const showModaltwo = () => {
    instmodal.style.display = "flex";
}
const hideModaltwo = () => {
    instmodal.style.display = "none";
}

endButton.style.display = "none";
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    endButton.style.display = "block";
    endButton.style.marginLeft = "auto";
    endButton.style.marginRight = "auto";
    mosqAudio.play()
    mosqAudio.volume = 0.4;
    const audioDuration = 3000;
    setTimeout(() => {
        mosqAudio.pause();
    }, audioDuration);
    });

    hideModaltwo()

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeModalButton.addEventListener('click', closeModal)
instButton.addEventListener('click', showModaltwo)
closeinst.addEventListener('click', hideModaltwo)
