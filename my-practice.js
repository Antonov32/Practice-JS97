// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі
// Оголошена функція normalizeInput(input, to)
// Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
// Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
// Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
// Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
// Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
// Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.slice().toUpperCase();
//   } else {
//     return input.slice().toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));

//*
//
// ------------------------------------------------------------
//
//*

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення
// Оголошена функція getFileName(file)
// Виклик функції getFileName("styles.css") повертає "styles"
// Виклик функції getFileName("app.js") повертає "app"
// Виклик функції getFileName("app") повертає "app"
// Виклик функції getFileName("index.js") повертає "index"
// Виклик функції getFileName("index.html") повертає "index"
// Виклик функції getFileName("index.css") повертає "index"
// Виклик функції getFileName("index") повертає "index"

// function getFileName(file) {
//   const fileIndex = file.indexOf(".");

//   if (file.includes(".")) {
//     return file.slice(0, fileIndex);
//   } else {
//     return file;
//   }
// }

// console.log(getFileName("styles.css")); // повертає "styles"
// console.log(getFileName("app.js")); // повертає "app"
// console.log(getFileName("styles")); // повертає "styles"
// console.log(getFileName("app")); // повертає "app"
// console.log(getFileName("index.js")); // повертає "index"
// console.log(getFileName("index.html")); // повертає "index"
// console.log(getFileName("index.css")); // повертає "app"
// console.log(getFileName("index")); // повертає "index"

//*
//
// ------------------------------------------------------------
//
//*

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// Оголошена функція createFileName(name, ext)
// Виклик функції createFileName(" order ", "txt") повертає "order.txt"
// Виклик функції createFileName(c) повертає "report.csv"
// Виклик функції createFileName(" presentation", "xml") повертає "presentation.xml"

// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   const trimmedExt = ext.trim();
//   return `${trimmedName}.${trimmedExt}`;
// }

// console.log(createFileName(" order ", "txt")); // повертає "order.txt"
// console.log(createFileName("report ", "csv")); // повертає "report.csv"
// console.log(createFileName(" presentation", "xml")); // повертає "presentation.xml"

//*
//
// ------------------------------------------------------------
//
//*

// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(0) повертає 0
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//   let result = 0;
//   let index = 0;
//   while (number > index) {
//     index += 1;
//     result += index;
//   }
//   return result;
// }

// console.log(calculateTotal(1)); // повертає 1
// console.log(calculateTotal(3)); // повертає 6
// console.log(calculateTotal(0)); // повертає 0
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300
// console.log(calculateTotal()); // повертає правильне значення

//*
//
// ------------------------------------------------------------
//
//*

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
// }

// console.log(calculateEvenTotal(1)); // повертає 0
// console.log(calculateEvenTotal(3)); // повертає 2
// console.log(calculateEvenTotal(7)); // повертає 12
// console.log(calculateEvenTotal(18)); // повертає 90
// console.log(calculateEvenTotal(27)); // повертає 182
// console.log(calculateEvenTotal()); // з випадковим числом повертає правильне значення

//*
//
// ------------------------------------------------------------
//
//*

//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//*
//
// ------------------------------------------------------------
//
//*

// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно

// const max = 50;
// const min = 0;

// function totalPaarNumber(maxValue, minValue) {
//   let total = 0;
//   for (let i = minValue; i <= maxValue; i += 1) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//     total += i;
//   }
//   return total;
// }

// console.log(totalPaarNumber(max, min));

//*
//
// ------------------------------------------------------------
//
//*

// Напишіть функцію, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`

// const min = 1;
// const max = 5;

// function totalNumber(minValue, maxValue) {
//   let total = 0;
//   for (let i = minValue; i <= maxValue; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       total += i;
//     }
//   }
//   return `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${total}`;
// }

// console.log(totalNumber(min, max));

//*
//
// ------------------------------------------------------------
//
//*

// Знайти перше ціле число, яке ділиться як на 2, так і на 3.

// let firstNumber;
// let secondNumber;

// for (firstNumber = 1; ; firstNumber += 1) {
//   if (firstNumber % 2 === 0 && firstNumber % 3 === 0) {
//     break;
//   }
// }
// for (secondNumber = firstNumber + 1; ; secondNumber += 1) {
//   if (secondNumber % 2 === 0 && secondNumber % 3 === 0) {
//     break;
//   }
// }

// console.log(firstNumber);
// console.log(secondNumber);

//*
//
// ------------------------------------------------------------
//
//*

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
// Оголошена функція getLastElementMeta(array)

// function getLastElementMeta(array) {
//   let indexArray = array.length - 1;
//   let lastElement = array[array.length - 1];
//   return [indexArray, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // повертає [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"])); // повертає [2, "pear"]
// // getLastElementMeta(["apple", "peach"]); // повертає [1, "peach"]
// // getLastElementMeta(["apple"]); // повертає [0, "apple"]

//*
//
// ------------------------------------------------------------
//
//*

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   let firstElement = array[0];
//   let lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); // повертає [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // повертає ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // повертає ["apple", "banana"]

//*
//
// ------------------------------------------------------------
//
//*

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const searchValue = array.indexOf(value);

//   if (array.includes(value)) {
//     return array.slice(0, searchValue + 1);
//   } else {
//     return [];
//   }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // повертає ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // повертає ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // повертає ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // повертає []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // повертає []

//*
//
// ------------------------------------------------------------
//
//*

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
// console.log(calculateTotalPrice([])); // з випадковим масивом повертає правильне значення

//*
//
// ------------------------------------------------------------
//
//*

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let paarNumber = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       paarNumber.push(i);
//     }
//   }
//   return paarNumber;
// }

// console.log(getEvenNumbers(2, 5)); // повертає [2, 4]
// console.log(getEvenNumbers(3, 11)); // повертає [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // повертає [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // повертає [8]
// console.log(getEvenNumbers(7, 7)); // повертає []
// console.log(getEvenNumbers()); // з випадковими start і end повертає правильний масив

//*
//
// ------------------------------------------------------------
//
//*

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// console.log(getCommonElements()); // з випадковими двома масивами повертає правильний масив

//*
//
// ------------------------------------------------------------
//
//*

// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const i of order) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// calculateTotalPrice([164, 48, 291]) // повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // повертає 1116
// calculateTotalPrice([]) // повертає 0
// calculateTotalPrice() // з випадковим масивом чисел повертає правильну суму

//*
//
// ------------------------------------------------------------
//
//*

// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   const newArray = Array.from(arguments);
//   return newArray.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4)); // повертає [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); // повертає [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); // повертає [176, 63, 94, 371, 412]
// console.log(createReversedArray()); // повертає []

//*
//
// ------------------------------------------------------------
//
//*

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// let keys = [];
// let values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// console.log(keys); // це масив ["descr", "rating", "price"]
// Оголошена змінна values
// console.log(values); // це масив ["Spacious apartment in the city center", 4, 2153]
// Використано цикл for...in

//*
//
// ------------------------------------------------------------
//
//*

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//   let propCount = 0;
//   let keys = Object.keys(object);

//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); // повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // повертає 3
// Функція використовує метод Object.keys()

//*
//
// ------------------------------------------------------------
//
//*

// Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color["hex"]);
//   rgbColors.push(color["rgb"]);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

//*
//
// ------------------------------------------------------------
//
//*

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const nameToSearchFor = productName;

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// // Оголошена функція getProductPrice(productName).
// console.log(getProductPrice("Radar")); // повертає 1300.
// console.log(getProductPrice("Grip")); // повертає 1200.
// console.log(getProductPrice("Scanner")); // повертає 2700.
// console.log(getProductPrice("Droid")); // повертає 400.
// console.log(getProductPrice("Engine")); // повертає null.

//*
//
// ------------------------------------------------------------
//
//*

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const nameArray = [];
//   const priceArray = [];
//   const quantityArray = [];
//   const nameToSearchFor = propName;

//   for (const product of products) {
//     nameArray.push(product.name);
//     priceArray.push(product.price);
//     quantityArray.push(product.quantity);
//   }

//   if (nameToSearchFor === "name") {
//     return nameArray;
//   } else if (nameToSearchFor === "price") {
//     return priceArray;
//   } else if (nameToSearchFor === "quantity") {
//     return quantityArray;
//   } else {
//     return [];
//   }
// }

// console.log(getAllPropValues("name")); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // повертає []

//*
//
// ------------------------------------------------------------
//
//*

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const nameToSearchFor = productName;

//   for (const product of products) {
//     if (nameToSearchFor === product.name) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${nameToSearchFor} not found!`;
// }

// Оголошена функція calculateTotalPrice(productName)
// console.log(calculateTotalPrice("Blaster")); // повертає "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // повертає 5200
// console.log(calculateTotalPrice("Droid")); // повертає 2800
// console.log(calculateTotalPrice("Grip")); // повертає 10800
// console.log(calculateTotalPrice("Scanner")); // повертає 8100
