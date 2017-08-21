//questions
//testing 
/*var timer = 9;
console.log(timer)

window.onload = function () {
//countdown of the game
setTimeout(countdown, 1000 * 5);

function countdown(){
  $("#timer").append("countdown");
  console.log("10 seconds left");
}*/

//questions
//Is Nicki Minaj Better Than Remy Ma?

function submitAnswers(){

	var total = 3; //results are shown
	var score = 0;

	//user input from quiz and three questions
	var q1 = document.forms["quiz"]["q1"].value
	var q2 = document.forms["quiz"]["q2"].value
	var q3 = document.forms["quiz"]["q3"].value

	//test alert(q1);

	// checks to make sure you answer the form subission	
	for (i = 1; i< total ; i++){
		if(eval('q' + i) === null || eval('q' + i) === "" ) {
		alert("You missed a question");
		return false;
						}
	}

	//answers to the questions sway
	 var answers = ["a", "c", "a"];

	 // checks the answers

	 if(q1 == answers[0]){
	 	score++;
	 }
	 if(q2 == answers[1]){
	 	score++;
	 }

	 if(q3 == answers[2]){
	 	score++;
	 }
	 alert( "you got" + " " + score + " " + "out of" + " " + total + " " + "correct.");

	 
	 window.onload = function () { }

// tells the user about the amount of time left 
/*
setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);
//  Step 3:
//  Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
 $("#countdown").append("dddd");
  console.log("10 seconds left");
}
function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
 $("#countdown").append("<h3>About 5 Seconds Left!</h3>");
  console.log("5 seconds left");
}
function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
 // $("#countdown").append("<h2>Time's Up!</h2>");
  console.log("time is up");

} */

function results (){

	if (score === 3)
		alert("you got it!");
	else
		alert("gjj")
}

}//end









