const score = document.querySelector('.score_label__count')
const paper = document.querySelector('.options-container__paper')
const rock = document.querySelector('.options-container__rock')
const scissors = document.querySelector('.options-container__scissors')
const rulesBtn = document.querySelector('.rules-btn')
const rulesCloseBtn = document.querySelector('.rules__close-btn')
const rules = document.querySelector('.rules')
const rulesShadow = document.querySelector('.rules__shadow')
const options = document.querySelector('.options-container')
const resultContainer = document.querySelector('.result-container')
const playerResult = document.querySelector('.result-container__player')
const computerResult = document.querySelector('.result-container__computer')
const infoAboutWin = document.querySelector('.result-container__info')
const playAgainBtn = document.querySelector('.result-container__play-again-btn')

let computerChose
let playerChose
let scoreSum = 0
score.textContent = `${scoreSum}`

const choiceList = ['rock', 'paper', 'scissors']
const showRules = () => {
	rules.classList.add('show')
	rulesShadow.classList.remove('rules__shadow--hide')
}

const hideRules = () => {
	rules.classList.remove('show')
	rulesShadow.classList.add('rules__shadow--hide')
}

const playerChoice = () => {
	const img = document.createElement('img')
	playerResult.classList.add(`result-container__player--${playerChose}`)
	img.classList.add('result-container__img-player')
	img.setAttribute('src', `./images/icon-${playerChose}.svg`)
	playerResult.appendChild(img)
}

const showResults = () => {
	resultContainer.classList.remove('result-container--hide')
	options.classList.remove('options-container--active')
}

const playerChosePaper = () => {
	playerChose = 'paper'
	game()
}

const playerChoseScissors = () => {
	playerChose = 'scissors'
	game()
}

const playerChoseRock = () => {
	playerChose = 'rock'
	game()
}

const game = () => {
	showResults()
	playerChoice()
	setTimeout(computerChoice(), 500)
	setTimeout(() => {
		checkWin()
	}, 1000)
	setTimeout(() => {
		score.textContent = `${scoreSum}`
	}, 1200)
}

const computerChoice = () => {
	const randomIndex = Math.floor(Math.random() * 3)
	setTimeout(() => {
		computerResult.classList.add(`result-container__computer--show-${choiceList[randomIndex]}`)
		computerResult.classList.remove('result-container__computer--shadow')
		computerChose = choiceList[randomIndex]
		const img = document.createElement('img')
		img.classList.add('result-container__img-computer')
		img.setAttribute('src', `./images/icon-${computerChose}.svg`)
		computerResult.appendChild(img)
	}, 1000)
	infoAboutWin.classList.add('result-container__info--show-animation')
	playAgainBtn.classList.add('result-container__play-again-btn--show-animation')
}

const checkWin = () => {
	console.log(computerChose, playerChose)
	if (computerChose === playerChose) {
		infoAboutWin.textContent = 'draw'
	} else if (playerChose === 'rock') {
		if (computerChose === 'paper') {
			infoAboutWin.textContent = 'you lose'
			computerResult.classList.add('result-container__computer--puls-animation')
		} else if (computerChose === 'scissors') {
			infoAboutWin.textContent = 'you win'
			scoreSum++
			playerResult.classList.add('result-container__player--puls-animation')
		}
	} else if (playerChose === 'scissors') {
		if (computerChose === 'rock') {
			infoAboutWin.textContent = 'you lose'
			computerResult.classList.add('result-container__computer--puls-animation')
		} else if (computerChose === 'paper') {
			infoAboutWin.textContent = 'you win'
			scoreSum++
			playerResult.classList.add('result-container__player--puls-animation')
		}
	} else if (playerChose === 'paper') {
		if (computerChose === 'scissors') {
			infoAboutWin.textContent = 'you lose'
			computerResult.classList.add('result-container__computer--puls-animation')
		} else if (computerChose === 'rock') {
			infoAboutWin.textContent = 'you win'
			scoreSum++
			playerResult.classList.add('result-container__player--puls-animation')
		}
	}
}

const playAgain = () => {
	playerResult.classList.remove('result-container__player--puls-animation')
	computerResult.classList.remove('result-container__computer--puls-animation')
	playerResult.classList.remove(`result-container__player--${playerChose}`)
	resultContainer.classList.add('result-container--hide')
	options.classList.add('options-container--active')
	computerResult.classList.remove(`result-container__computer--show-${computerChose}`)
	computerResult.classList.add('result-container__computer--shadow')
	const img1 = document.querySelector('.result-container__img-player')
	const img2 = document.querySelector('.result-container__img-computer')
	playerResult.removeChild(img1)
	computerResult.removeChild(img2)
	infoAboutWin.classList.remove('result-container__info--show-animation')
	playAgainBtn.classList.remove('result-container__play-again-btn--show-animation')
}

rock.addEventListener('click', playerChoseRock)
paper.addEventListener('click', playerChosePaper)
scissors.addEventListener('click', playerChoseScissors)

rulesCloseBtn.addEventListener('click', hideRules)
rulesBtn.addEventListener('click', showRules)
playAgainBtn.addEventListener('click', playAgain)
