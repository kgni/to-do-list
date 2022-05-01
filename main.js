// Take input and insert it into DOM

const list = [];

const inputBtn = document.querySelector('.input-btn');
const ul = document.querySelector('ul');

const deleteBtn = document.querySelectorAll('.delete-btn');

inputBtn.addEventListener('click', addTodoItem);
// deleteBtn.addEventListener('click', deleteTodoItem);

function addTodoItem() {
	const input = document.querySelector('input');
	if (input.value === '') {
		return;
	} else {
		// Creating LI and appending to UL
		let li = document.createElement('li');
		li.innerText = input.value;
		ul.appendChild(li);
		list.push(li);

		// Creating buttons and appending it to li
		let buttons = document.createElement('div');
		buttons.classList.add('buttons');

		li.appendChild(buttons);

		// Creating buttons and appending them to the buttons div
		let editBtn = document.createElement('i');
		editBtn.classList.add('fa-solid', 'fa-pen-to-square', 'edit-btn');
		buttons.appendChild(editBtn);

		let deleteBtn = document.createElement('i');
		deleteBtn.classList.add('fa-solid', 'fa-x', 'delete-btn');
		buttons.appendChild(deleteBtn);

		input.value = '';
	}
}

// function deleteTodoItem(e) {
// 	e.target.removeChild(li);
// }

// Create button for editing and deleting array item
// add it all to local storage
