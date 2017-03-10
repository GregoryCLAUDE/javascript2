console.log ("hello");

// step 4

var solution = Math.floor(Math.random()*4);



for ( var i = 0; i<3; i++) { 
	
	var response = prompt ("choose a number betwenn 0 and 3");		
	
	if (solution < response) {
		console.log ("lower") ;}
	else if (response < solution){
		console.log ("higher");}
	else {
		console.log ("congratulation, you win!");break;
	}
}