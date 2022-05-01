// Take input and insert it into DOM

const inputBtn = document.querySelector('.input-btn');
const ul = document.querySelector('ul');

inputBtn.addEventListener('click', addTodoItem);

function addTodoItem() {
	const input = document.querySelector('input');
	let li = document.createElement('li');
	li.innerText = input.value;
	ul.appendChild(li);

	input.value = '';
}

// Create button for editing and deleting array item
// add it all to local storage
