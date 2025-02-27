let numbers = []
let chances = -1;
let round = 1;

function sortedNumber() {
	numbers.push(Math.floor(Math.random() * 4 + 1))
	readNumbers();
}
function nextRound() {
	round++
	document.querySelector('#round').innerHTML = `Rodada : ${round}`
}
function flash(button) {
	const colorOrigin = button.classList[1];
	// console.log(colorOrigin)
	button.style.backgroundColor = "white";
	setTimeout(() => button.style.backgroundColor = colorOrigin, 500);
	// button.style.backgroundColor = "green";
}

function resetChances() {
	chances = -1;
}
function readInput(number) {
	
	if(number == numbers[chances]) {

		flash(document.querySelector(`.button:nth-child(${numbers[chances ]})`));

		if(chances + 1 == numbers.length) {
			setTimeout(() => {
				nextRound()
				resetChances()
				sortedNumber()
				removeEventClick() 
			}, 1000)
		}

	}
	else {
		console.log('deu errado')
		removeEventClick() 
	}
}

function initEventClick() {
	const buttons = document.querySelectorAll('.button');
	for(let i = 0; i < 4; i++) {
		buttons[i].onclick = () => {
			chances++;
			readInput(i + 1)
		}
	}
}
function removeEventClick() {
	const buttons = document.querySelectorAll('.button');
	for(let i = 0; i < 4; i++) {
		buttons[i].onclick = null;
	}
}
function readNumbers() {
	
	let i = 0; 

	const interval = setInterval(() =>{
		switch(numbers[i]) {
			case 1:
				flash(document.querySelector(`.button:nth-child(${numbers[i]})`))
				break;
			case 2:
				flash(document.querySelector(`.button:nth-child(${numbers[i]})`))
				break;
			case 3:
				flash(document.querySelector(`.button:nth-child(${numbers[i]})`))
				break;
			case 4:
				flash(document.querySelector(`.button:nth-child(${numbers[i]})`))
				break;
		} 
		
		i++;

		if(i > numbers.length) {
			i = 0;
			initEventClick()
			clearInterval(interval)
		}
	}, 1500) 
}

document.querySelector('button').onclick = () => {
	document.querySelector('#init-background').remove();
	sortedNumber();
}


