console.log ("hello");

// step 4

var solution = Math.floor(Math.random()*4);

var response = prompt ("choississez un chiffre entre 0 et 3");


	//if (solution < response) 
	//console.log ("vous êtes au dessus");
	//else if (response < solution)
	//	console.log ("vous ëtes au dessous")
	//else 
	//	console.log("félicitation vous avez trouver!");
	

for (solution = 0; solution != response; solution) {

if (solution < response) {
	console.log ("vous êtes au dessus");}
	else if (response < solution){
		console.log ("vous ëtes au dessous");}
	
	else 
		console.log("félicitation vous avez trouvé!");
	
