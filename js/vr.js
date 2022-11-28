const $addButton = document.querySelector('#addButton')
const $starting = document.querySelector('#starting');
const $text = document.querySelector('#texto')
const $tasks = document.querySelector('#tasks')
let rec = undefined
let professorsQuestions = [];

class item {
	constructor(itemName) {
		this.createDiv(itemName)
	}

	createDiv(itemName) {
		let taskItem = document.createElement('div')
		taskItem.classList.add('task__item')

		let input = document.createElement('input')
		input.value = itemName
		input.disabled = true
		input.type = 'text'

		let editButton = document.createElement('button')
		editButton.classList.add('edit')
		let iconPencil = document.createElement('i')
		iconPencil.classList.add('fa')
		iconPencil.classList.add('fa-edit')
		editButton.appendChild(iconPencil)

		let deleteButton = document.createElement('button')
		deleteButton.classList.add('delete')
		let iconDelete = document.createElement('i')
		iconDelete.classList.add('fas')
		iconDelete.classList.add('fa-trash')
		deleteButton.appendChild(iconDelete)

		let inputKW = document.createElement('input')
		inputKW.placeholder = "Write the keywords or the full concept"
		inputKW.type = 'text'

		let inputFullConcept = document.createElement('input')
		inputFullConcept.type = 'checkbox'

		let labelFullOrKW = document.createElement('h4')
		labelFullOrKW.innerText = "Check the box if your want to add keywords. If don't, your shall write a full concept"

		let editButtonKW = document.createElement('button')
		editButtonKW.classList.add('edit')
		let iconPencilKW = document.createElement('i')
		iconPencilKW.classList.add('fa')
		iconPencilKW.classList.add('fa-edit')
		editButtonKW.appendChild(iconPencilKW)

		let deleteButtonKW = document.createElement('button')
		deleteButtonKW.classList.add('delete')
		let iconDeleteKW = document.createElement('i')
		iconDeleteKW.classList.add('fas')
		iconDeleteKW.classList.add('fa-trash')
		deleteButtonKW.appendChild(iconDeleteKW)


		$tasks.appendChild(taskItem)
		taskItem.appendChild(input)
		taskItem.appendChild(editButton)
		taskItem.appendChild(deleteButton)
		taskItem.appendChild(inputKW)
		taskItem.appendChild(editButtonKW)
		taskItem.appendChild(deleteButtonKW)
		taskItem.appendChild(inputFullConcept)
		taskItem.appendChild(labelFullOrKW)

		editButton.addEventListener('click', () => this.edit(input))
		input.addEventListener('blur', () => (input.disabled = true))

		deleteButton.addEventListener('click', () => this.remove(taskItem))
	}

	edit(input) {
		input.disabled = !input.disabled;
		input.focus();
	}

	remove(item) {
		$tasks.removeChild(item)
	}

}

const addItem = () => {
	if ($text.value === "") {
		alert("You should write a question!")
	} else {
		new item($text.value)
		professorsQuestions.push($text.value);
		console.log(professorsQuestions);
		$text.value = ""
	}
}

const startTest = () => {
	new itemStudent();
	console.log("Despues de itemStudent")
}

$addButton.addEventListener('click', addItem);