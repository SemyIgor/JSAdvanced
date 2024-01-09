/*
Задание 2: 
Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. 
Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для 
своего гарнитура. После того как пользователь собрал свой комплект и сохраняет 
свой выбор, информация о нем сохраняется в localStorage. При следующем посещении 
сайта их индивидуальные настройки автоматически загружаются, и они видят ранее 
созданный мебельный комплект.
 
1. Создайте базовую HTML-структуру с различными элементами мебели (например, 
стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой
мебельный гарнитур.
3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить 
комплект", которая сохраняет текущий выбор пользователя в localStorage.
4. При следующем посещении сайта автоматически загрузите сохраненные параметры 
из localStorage и отобразите ранее созданный комплект.
5. Убедитесь, что у пользователей есть возможность очистить сохраненные 
настройки (очистить localStorage).
*/

const orderKey = 'order';

const saveBtn = document.getElementById('save-btn');
const loadBtn = document.getElementById('load-btn');
const clearBtn = document.getElementById('clear-btn');

// Получаем из формы модуль цвета стола
const tableColor = document.getElementById('table-color');
// Получаем из формы модуль материала стула
const chairMaterial = document.getElementById('chair-material');

// Сохраняем заказ
saveBtn.addEventListener('click', saveOrder);

// По нажатию кнопки загружаем последний заказ из хранилища
loadBtn.addEventListener('click', loadOrder);

// По нажатию кнопки удаляем последний заказ из локального хранилища
clearBtn.addEventListener('click', () => localStorage.removeItem(orderKey));

// Функция сохранения заказа в локальное хранилище
function saveOrder() {
	// Сохраняем выбранный в форме цвет стола
	const tableColorValue = tableColor.value;
	// Сохраняем выбранный в форме материал стула
	const chairMaterialValue = chairMaterial.value;

	// Создаём объект с данными из формы
	const order = {
		table: tableColorValue,
		chair: chairMaterialValue,
	};

	// Преобразуем созданный объект в строку и сохраняем её в локальное хранилище
	localStorage.setItem(orderKey, JSON.stringify(order));
}

// Функция получения из локального хранилища последнего заказа и заполнения этими данными формы ввода
function loadOrder() {
	if (localStorage.getItem(orderKey)) {
		// Преобразуем последний заказ в объект
		const lastOrder = JSON.parse(localStorage.getItem(orderKey));
		// Записываем элементы последнего заказа в поля ввода формы
		tableColor.value = lastOrder.table;
		chairMaterial.value = lastOrder.chair;
	}
}
