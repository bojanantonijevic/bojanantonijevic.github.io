
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissers_div = document.getElementById('s');

function convertToWord(letter) {
	if(letter == 'r'){
		return "Rock";
	}if(letter == 's'){
		return "Scissers";
	}if(letter == 'p'){
		return "Paper";
	}
}


function getComputerChoice() {
	const choices = ['r','p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];


}
function win(userChoice, computerChoice){
	
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = smallUserWord +" " + convertToWord(userChoice) + " beats " +  convertToWord(computerChoice)+ " " +smallCompWord+"<br /> You win!";
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 300);

	
};


function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = smallUserWord +" " + convertToWord(userChoice) + " loses to " +  convertToWord(computerChoice)+ " " +smallCompWord+"<br /> You lost!";
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 300);

};


function draw(userChoice, computerChoice){

	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = smallUserWord +" " + convertToWord(userChoice) + " equals " +  convertToWord(computerChoice)+ " " +smallCompWord+"<br /> It's a draw!";
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')}, 300);

};


function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case "rs":
		case "sp":
		case "pr":
		win(userChoice, computerChoice);
		break;

		case "rp":
		case "ps":
		case "sr":
		lose(userChoice, computerChoice);
		break;

		case "rr":
		case "pp":
		case "ss":
		draw(userChoice, computerChoice);
		break;
		
	}
}


function main(){
	
	rock_div.addEventListener('click', function(){
		game("r");
	});

	paper_div.addEventListener('click', function(){
		game("p");
	});

	scissers_div.addEventListener('click', function(){
		game("s");
	});

}
main();

function meCheater(){
	console.log("Cheater, Cheater Pumpkin Eater");
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = "Cheater, Cheater Pumpkin Eater!";
}

