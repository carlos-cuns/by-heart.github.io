const flashcards = document.getElementsByClassName("flashcards")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Make new box for new flashcards
contentArray.forEach(divMaker);

function divMaker(text) {
	var div = document.createElement("div");
	var p_question = document.createElement("p");
	var p_answer = document.createElement("p");

	div.className = 'flashcard-container';
	p_question.setAttribute('style', "padding: 15px margin-top: 30px");
	p_question.innerHTML = text.my_question;

	p_answer.setAttribute('style', "text-align: center; display: none");
	p_answer.innerHTML = text.my_answer;

	div.appendChild(p_question);
	div.appendChild(p_answer);

	div.addEventListener("click", function () {
		if (p_answer.style.display == "none") {
			p_answer.style.display = "block";
			p_question.style.display = "none";
		}
		else {
			p_answer.style.display = "none";
			p_question.style.display = "block";
		}
	});

	flashcards.appendChild(div);
}

// Clear out all cards
function deleteDeck() {
	localStorage.clear();
	flashcards.innerHTML = "";
	contentArray = [];
}

// Add a card
function addCard() {
	var flashcards_info = {
		'my_question' : question.value,
		'my_answer' : answer.value
	}

	contentArray.push(flashcards_info);
	localStorage.setItem('items', JSON.stringify(contentArray));
	divMaker(contentArray[contentArray.length - 1]);

	question.value = '';
	answer.value = '';
}