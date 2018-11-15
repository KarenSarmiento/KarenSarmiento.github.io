// add noughts and crosses code here

// Define all the elements
var game = "ul.game";
var gameSquare = "ul.game li.blank";
var nought = "ul.game li.marco";
var cross = "ul.game li.karen";

karenBox = new Set();
marcoBox = new Set();

var karenTurn = true;

function processClick(e) {
  if (karenTurn) {
    e.classList.add('karen');
		e.classList.remove('blank');
		karenBox.add(e.id);		
  } else {
    e.classList.add('marco');
		e.classList.remove('blank');
		karenBox.add(e.id);
  }
  karenTurn = !karenTurn;
}

function alertFunc(s) {
  alert("Today's date is");
}
