const inputNumber = document.querySelector('.sort__input');
const sortType = document.querySelector('.sort__input--hidden');
const button = document.querySelector('.sort__btn');
const sortBoxes = document.querySelector('.sort__boxes');
const clearButton = document.querySelector('.sort__clear');

class Sort {
	constructor(...numbers) {
		this.numbers = numbers;
	}

	addNumber(number) {
		this.numbers.push(number);
	}

	bubbleSort() {
		const array = this.numbers;
		let swapped;
		for (let i = 0; i < array.length; i++) {
			swapped = false;
			for (let j = 0; j < array.length - i - 1; j++) {
				if (array[j] > array[j + 1]) {
					let temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
					swapped = true;
				}
			}
			if (!swapped) {
				break;
			}
		}
		this.numbers = array;
	}

	selectionSort() {
		let n = this.numbers.length;
		for (let i = 0; i < n; i++) {
			let min = i;
			for (let j = i + 1; j < n; j++) {
				if (this.numbers[j] < this.numbers[min]) {
					min = j;
				}
			}
			if (min != i) {
				let tmp = this.numbers[i];
				this.numbers[i] = this.numbers[min];
				this.numbers[min] = tmp;
			}
		}
	}

	clearDashboard() {
		sortBoxes.innerHTML = '';
	}

	clearDatas() {
		this.clearDashboard();
		this.numbers = [];
	}

	deployDatas() {
		const array = this.numbers;
		array.forEach(element => {
			const div = document.createElement('div');
			div.classList.add('sort__box');
			sortBoxes.appendChild(div);
			const p = document.createElement('p');
			p.textContent = element;
			div.appendChild(p);
		});
	}
}

const sort = new Sort();
function inputHandler() {
	const parsedNumber = Number.parseInt(inputNumber.value);
	if (parsedNumber || parsedNumber === 0) {
		sort.clearDashboard();
		sort.addNumber(parsedNumber);
		console.log(sortType.value);
		if (sortType.value === 'bubleSort') {
			sort.bubbleSort();
		} else if (sortType.value === 'selectionSort') {
			sort.selectionSort();
		}
		sort.deployDatas();
	}
}

button.addEventListener('click', () => {
	inputHandler();
	inputNumber.value = '';
});
document.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		inputHandler();
		inputNumber.value = '';
	}
});

clearButton.addEventListener('click', function () {
	sort.clearDatas();
});
