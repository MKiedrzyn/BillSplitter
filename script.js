const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const count = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkForm = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Uzupełnij wszystkie pola!'
		costInfo.style.display = 'none'
	} else {
		error.textContent = ''
		countBill()
		cost.textContent = ((Number(price.value) + Number(price.value) * Number(tip.value)) / Number(people.value)).toFixed(
			2
		)
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)
	const sum = (newPrice + newPrice * newTip) / newPeople

	costInfo.style.display = 'block'
	cost.textContent = sum.toFixed(2)
}

count.addEventListener('click', checkForm)
