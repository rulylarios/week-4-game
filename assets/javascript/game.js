

var rule = true;
var globalNumber;
var wins = 0;
var losses = 0;

window.onload = function(){

	reset();
	
	
	$("#soccer").on("click", function() {
		if(rule === true){
			globalNumber = soccerNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			rule = false;	
			
		}
		
		else {

			globalNumber = globalNumber + soccerNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			//If I want to put the number next to the word 
			//I have to make a new division on the html file and use bootstrap to fix the div
			if(globalNumber === randomNumber){
				wins++;
				$(".wins").html("<h4>Wins: </h4>" + wins);
				reset();
			} 
			else if(globalNumber > randomNumber){
				losses++;
				$(".losses").html("<h4>Losses: </h4>" + losses);
				reset();
			}

		}	

	});
	
	$("#football").on("click", function() {
		if(rule === true){
			globalNumber = footballNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			rule = false;
			
		} 
		else {

			globalNumber = globalNumber + footballNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			
			if(globalNumber === randomNumber){
				wins++;
				$(".wins").html("<h4>Wins: </h4>" + wins);
				reset();


			} 
			else if(globalNumber > randomNumber){
				losses++;
				$(".losses").html("<h4>Losses: </h4>" + losses);
				reset();
			}

		}	
	});

	$("#basketball").on("click", function() {
		if(rule === true){
			globalNumber = basketballNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			rule = false;
			
		} 
		else {

			globalNumber = globalNumber + basketballNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			
			if(globalNumber === randomNumber){
				wins++;
				$(".wins").html("<h4>Wins: </h4>" + wins);
				reset();
			} 
			else if(globalNumber > randomNumber){
				losses++;
				$(".losses").html("<h4>Losses: </h4>" + losses);
				reset();

			}

		}	
	});

	$("#baseball").on("click", function() {
		if(rule === true){
			globalNumber = baseballNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			rule = false;
			
		} 
		else {

			globalNumber = globalNumber + baseballNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			
			if(globalNumber === randomNumber){
				wins++;
				$(".wins").html("<h4>Wins: </h4>" + wins);
				reset();

			} 
			else if(globalNumber > randomNumber){
				losses++;
				$(".losses").html("<h4>Losses: </h4>" + losses);
				reset();
			}

		}	
	});

}

function reset(){
		
	randomNumber = Math.ceil(Math.random() * 100);
	
	$(".randomNumber").html("<h3>Random Number: </h3>" + randomNumber);
	
	globalNumber = 0;
	
	$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);

	soccerNumber = Math.ceil(Math.random() * 15);
	console.log(soccerNumber);
				
	footballNumber = Math.ceil(Math.random() * 15);
	console.log(footballNumber);
				
	basketballNumber = Math.ceil(Math.random() * 15);
	console.log(basketballNumber);
				
	baseballNumber = Math.ceil(Math.random() * 15);
	console.log(baseballNumber);
}




//Display random number on screen (check)

//Have each crystal worth a number (check)

//Have each crystal add its number into the number total displayed on screen when clicked (check)

//If number is matched, user wins and game restarts, wins increases by one (check)

//If number goes beyond the number goal, players loses and game restarts, losses increases by one (check)




//include crystal images (check)

