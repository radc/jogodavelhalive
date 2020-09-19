var blankSpot = "_";
var idButtons = ["b00","b01","b02","b10","b11","b12","b20","b21","b22"];

var gameMatrix = [["-","-","-"],["-","-","-"],["-","-","-"]];

var currSymbolIndex = 0;
var symbols = ["X","O"];

var endGame;

function startGame() {

	for (var i = 0; i < 9; i++) {
		document.getElementById(idButtons[i]).innerHTML = blankSpot;	
	}
	endGame = false;
	document.getElementById("rb").style.visibility = "hidden";
	currSymbolIndex = 0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			gameMatrix[i][j] = "-";			
		}
	}
	
}


function buttonClicked(row,column){
	if (gameMatrix[row][column] != "-") return;
	if (endGame) return;

	idCurrButton = idButtons[3*row+column];
	document.getElementById(idCurrButton).innerHTML = symbols[currSymbolIndex];
	gameMatrix[row][column] = symbols[currSymbolIndex];

	checkWinner();

	currSymbolIndex = currSymbolIndex == 0 ? 1 : 0;

}

function checkWinner(){
	for (var i = 0; i < 3; i++) {
		if (gameMatrix[i][0] == gameMatrix[i][1] && gameMatrix[i][0] == gameMatrix[i][2]){
			if (gameMatrix[i][0] != '-') {
				//GANHADOR
				winner();
				return;
			}
		}

		if (gameMatrix[0][i] == gameMatrix[1][i] && gameMatrix[0][i] == gameMatrix[2][i]){
			if (gameMatrix[0][i] != '-') {
				//GANHADOR
				winner();
				return;
			}
		}
	}

	if (gameMatrix[0][0] == gameMatrix[1][1] && gameMatrix[0][0] == gameMatrix[2][2]){
		if (gameMatrix[0][0] != '-') {
			//GANHADOR
			winner();
			return;
		}
	}		
	if (gameMatrix[0][2] == gameMatrix[1][1] && gameMatrix[0][2] == gameMatrix[2][0]){
		if (gameMatrix[0][2] != '-') {
			//GANHADOR
			winner();
			return;
		}
	}
	checkDraw();
}

function winner() {
	document.getElementById("message").innerHTML = symbols[currSymbolIndex] + " VENCEU!";
	endGame = true;
	document.getElementById("rb").style.visibility = "visible";
}
function draw(){
	document.getElementById("message").innerHTML = "EMPATE!";
	endGame = true;
	document.getElementById("rb").style.visibility = "visible";
}

function checkDraw() {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if(gameMatrix[i][j] == "-"){
				return;
			}
		}
	}
	draw();
}









