//elements
const buttonCookie = document.querySelector('.cookie')
const whatsYourLuck = document.querySelector('.screen1')
const seeYourLuck = document.querySelector('.screen2')
const openAnother = document.querySelector('.againButton')
let randomNumber = Math.round(Math.random() * 10)
let sentenceBox = document.querySelector('h2')

var sentencesDataBase = ['Uma bela flor é incompleta sem as suas folhas', 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu', 'Siga os bons e aprenda com eles', 'Não compense na ira o que lhe falta na razão', 'A maior de todas as torres começa no solo', 'Não há que ser forte. Há que ser flexível', 'A sorte favorece a mente bem preparada', 'Espere pelo mais sábio dos conselhos: o tempo', 'Todas as coisas são difíceis antes de se tornarem fáceis', 'Vencer é 90 por cento suor e 10 por cento de engenho', 'Você é do tamanho do seu sonho']; 


//functions
function toggleScreen() {
  whatsYourLuck.classList.toggle('hide')
  seeYourLuck.classList.toggle('hide')

  sentenceBox.innerHTML = sentencesDataBase[Math.round(Math.random() * 10)];
}


function handleCookie(event) {
  toggleScreen()
}

function againButton(e) {
  toggleScreen()
}

//events
buttonCookie.addEventListener('click', handleCookie)
openAnother.addEventListener('click', againButton)