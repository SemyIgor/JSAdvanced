// Напишите функцию calculateSum(a,b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.

let calculateSum = (a, b) => {
	return new Promise((resolve, reject) => {
		const sum = a + b;
		resolve(sum);
	});
};

calculateSum(5, 7).then((result) => {
	console.log('Сумма чисел:', result);
});
