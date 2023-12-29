/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
 1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
 2. Геттер balance, который позволит получить информацию о текущем балансе.
 3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
 4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/

function checkAmount(amount) {
	if (amount < 0) throw new Error('Negative number'); // зачисление меньше 0
	if (!Number.isFinite(amount)) throw new Error('Not a number'); // введено число
	if (+amount.toFixed(2) - amount !== 0) {
		throw new Error('Too many decimal places'); // больше двух знаков в дробной части
	}
	return true;
}

class BankAccount {
	#balance = 0;

	getBalance() {
		return this.#balance;
	}

	checkDeposit(amount) {
		if (checkAmount(amount)) return true;
	}

	checkWithdrow(amount) {
		checkAmount(amount);
		if (amount >= this.#balance)
			throw new Error('Вы не сможете снять такую сумму'); // запрос суммы больше баланса
		return true;
	}

	deposit(amount) {
		if (this.checkDeposit(amount)) {
			this.#balance = +(this.#balance + amount).toFixed(2);
			return this.#balance;
		}
	}

	withdraw(amount) {
		if (this.checkWithdrow(amount)) {
			this.#balance = +(this.#balance - amount).toFixed(2);
			return this.#balance;
		}
	}
}

const myAccount = new BankAccount();

const a = 10.23;
const b = 7.12;

console.log('myAccount add: ', myAccount.deposit(a));

console.log('myAccount with: ', myAccount.withdraw(b));
