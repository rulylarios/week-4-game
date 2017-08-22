

var rule = true;
var globalNumber;
var wins = 0;
var losses = 0;

window.onload = function(){

	$(".randomNumber").html("<h3>Random Number: </h3>" + randomNumber);

	var randomNumber = Math.ceil(Math.random() * 100);
	
	$(".randomNumber").html("<h3>Random Number: </h3>" + randomNumber);
	
	var soccerNumber = Math.ceil(Math.random() * 15);
	console.log(soccerNumber);
	
	var footballNumber = Math.ceil(Math.random() * 15);
	console.log(footballNumber);
	
	var basketballNumber = Math.ceil(Math.random() * 15);
	console.log(basketballNumber);
	
	var baseballNumber = Math.ceil(Math.random() * 15);
	console.log(baseballNumber);
	
	
		$("#soccer").on("click", function() {
			if(rule === true){
			globalNumber = soccerNumber;
			$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
			rule = false;	
	 		
	 		}
	 		
	 		else {

				globalNumber = globalNumber + soccerNumber;
				$(".totalScore").html("<h3>Total Score: </h3>" + globalNumber);
				
				if(globalNumber === randomNumber){
				wins++;
				randomNumber = Math.ceil(Math.random() * 100);
				$(".randomNumber").html("<h3>Random Number: </h3>" + randomNumber);
				$(".wins").html("<h4>Wins: </h4>" + wins);
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
				else if(globalNumber > randomNumber){
					losses++;
					$(".losses").html("<h4>Losses: </h4>" + losses);
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
				randomNumber = Math.ceil(Math.random() * 100);
				$(".randomNumber").html("<h3>Random Number: </h3>" + randomNumber);
				$(".wins").html("<h4>Wins: </h4>" + wins);
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
				else if(globalNumber > randomNumber){
					losses++;
					$(".losses").html("<h4>Losses: </h4>" + losses);
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
				randomNumber = Math.ceil(Math.random() * 100);
				$(".randomNumber").html("<h3>Random Number: </h3>" + randomNumber);
				$(".wins").html("<h4>Wins: </h4>" + wins);
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
				else if(globalNumber > randomNumber){
					losses++;
					$(".losses").html("<h4>Losses: </h4>" + losses);
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
				randomNumber = Math.ceil(Math.random() * 100);
				$(".randomNumber").html("<h3>Random Number: </h3>" + randomNumber);
				$(".wins").html("<h4>Wins: </h4>" + wins);
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
				else if(globalNumber > randomNumber){
					losses++;
					$(".losses").html("<h4>Losses: </h4>" + losses);
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

			}	
		});

	}






//Display random number on screen (check)

//Have each crystal worth a number (check)

//Have each crystal add its number into the number total displayed on screen when clicked (check)

//If number is matched, user wins and game restarts, wins increases by one (check)

//If number goes beyond the number goal, players loses and game restarts, losses increases by one (check)




//include crystal images (check)

