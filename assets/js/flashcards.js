const flashcards = document.getElementsByClassName("flashcards")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Make new box for new flashcards
contentArray.forEach(divMaker);

function divMaker(text) {
	var div = document.createElement("div");
	var h3_question = document.createElement("h3");
	var h3_answer = document.createElement("h3");

	div.className = 'flashcard-container';
	h3_question.setAttribute('style', "padding: 15px margin-top: 30px");
	h3_question.innerHTML = text.my_question;

	h3_answer.setAttribute('style', "text-align: center; display: none");
	h3_answer.innerHTML = text.my_answer;

	div.appendChild(h3_question);
	div.appendChild(h3_answer);

	div.addEventListener("click", function () {
		if (h3_answer.style.display == "none") {
			h3_answer.style.display = "block";
			h3_question.style.display = "none";
		}
		else {
			h3_answer.style.display = "none";
			h3_question.style.display = "block";
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