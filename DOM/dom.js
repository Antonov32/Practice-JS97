//*
//
// ---------------------------<!-- Practice Modul 7 -->-----------------------
//
//*

//*
//
// ---------------------------<!-- Властивість innerHTML -->-----------------------
//
//*

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

//*
//
// ---------------------------<!-- Метод insertAdjacentHTML() -->-----------------------
//
//*

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//*
//
// ---------------------------<!-- Задача №1 -->-------------------------
//
//*

// При натисканні на кнопку "SHOW ME", потрібно в консоль
// вивести значення, яке будемо вводити в інпут.

// const inInput = document.querySelector("#alertInput");
// const inBtn = document.querySelector("#alertButton");

// inBtn.addEventListener("click", () => {
//   console.log(inInput.value);
// });

//*
//
// ---------------------------<!-- Задача №2 -->-----------------------
//
//*

// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const inInput = document.querySelector("#passwordInput");
// const passBtn = document.querySelector("#passwordButton");

// passBtn.addEventListener("click", hideElement);

// function hideElement(event) {
//   if (inInput.type === "text") {
//     inInput.type = "password";
//     event.target.textContent = "Показати";
//     return;
//   } else {
//     inInput.type = "text";
//     event.target.textContent = "Приховати";
//   }
// }

//*
//
// ---------------------------<!-- Задача №3 -->-----------------------
//
//*

// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const box = document.querySelector("#box");
// const decrease = document.querySelector("#decrease");
// const increase = document.querySelector("#increase");

// decrease.addEventListener("click", decreaseBox);
// increase.addEventListener("click", increaseBox);

// function decreaseBox() {
//   box.style.width = `${box.offsetWidth + 10}px`;
//   box.style.height = `${box.offsetHeight - 10}px`;
// }

// function increaseBox() {
//   box.style.width = `${box.offsetWidth + 10}px`;
//   box.style.height = `${box.offsetHeight + 10}px`;
// }

//*
//
// ---------------------------<!-- Задача №4 -->-----------------------
//
//*

// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const button = document.querySelector("#double");
// const listElements = document.querySelectorAll(".listItem");

// button.addEventListener("click", doubleValue);

// function doubleValue() {
//   listElements.forEach((element) => (element.textContent *= 2));
// }

//*
//
// ---------------------------<!-- Задача №5 -->-----------------------
//
//*

// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const form = document.querySelector(".checkboxForm");
// const checkboxElements = document.querySelectorAll(".checkboxWrapper");

// form.addEventListener("submit", onSubmit);
// const checkBoxElement = document.querySelector(".checkboxWrapper");
// console.dir(checkBoxElement.lastElementChild);

// function onSubmit(event) {
//   event.preventDefault();
//   const filterList = [...checkboxElements].filter(
//     (element) => element.lastElementChild.checked
//   );
//   filterList.forEach((element) => element.remove());
// }

//*
//
// ---------------------------<!-- Задача №6 -->-----------------------
//
//*

// Наведено список людей. Зроби можливість сортування списку за ім'ям та за прізвищем.

// const sortByName = document.querySelector("#sortByNameButton");
// const sortByLastName = document.querySelector("#sortByLastNameButton");

// const list = document.querySelector(".people");
// const items = list.children;

// sortByName.addEventListener("click", sortName);
// sortByLastName.addEventListener("click", sortLastName);

// function sortName() {
//   const itemsToSortedByName = [...items].toSorted((a, b) =>
//     a.textContent.localeCompare(b.textContent)
//   );
//   list.innerHTML = "";
//   list.append(...itemsToSortedByName);
// }

// function sortLastName() {
//   const itemsToSortedByLastName = [...items].toSorted((a, b) => {
//     const firstValue = a.textContent.split(" ")[1];
//     // console.log(firstValue);
//     const secondValue = b.textContent.split(" ")[1];
//     // console.log(secondValue);
//     return firstValue.localeCompare(secondValue);
//   });
//   list.innerHTML = "";
//   list.append(...itemsToSortedByLastName);
// }

//*
//
// ---------------------------<!-- Задача №7 -->-----------------------
//
//*

// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const inContactFilter = document.querySelector(".contactsFilter");
// const listContacts = document.querySelector(".contacts");
// const itemContacts = [...listContacts.children];

// inContactFilter.addEventListener("input", checkText);

// function checkText(event) {
//   const value = event.target.value.toLowerCase();
//   // console.log(value);
//   const filterItems = [...itemContacts].filter((item) =>
//     item.textContent.toLowerCase().includes(value)
//   );
//   if (!filterItems.length) {
//     // alert("Співпадіння не знайдено!");
//     const text = document.createElement("p");
//     text.textContent = `${value} не знайдено!`;
//     listContacts.innerHTML = "";
//     listContacts.appendChild(text);
//     return;
//   }
//   listContacts.innerHTML = "";
//   listContacts.append(...filterItems);
// }

//*
//
// ---------------------------<!-- Метод addEventListener() -->-----------------------
//
//*

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

//*
//
// ---------------------------<!-- Метод removeEventListener() -->-----------------------
//
//*

// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

//*
//
// ---------------------------<!-- Об'єкт події -->-----------------------
//
//*

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

//*
//
// ---------------------------<!-- Властивості key і code -->-----------------------
//
//*

// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn);

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

//*
//
// ---------------------------<!-- Подія submit -->-----------------------
//
//*

// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   form.reset();
// }

//*
//
// ---------------------------<!-- Подія change -->-----------------------
//
//*

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

//*
//
// ---------------------------<!-- Подія input -->-----------------------
//
//*

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

//*
//
// ---------------------------<!-- Подія focus і blur -->-----------------------
//
//*

// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

//*
//
// ---------------------------<!-- Делегування подій -->-----------------------
//
//*

// <--- Поширення подій --->

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   console.log("Descendant click handler");
// });

// <--- Цільовий елемент --->

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// <--- Припинення спливання --->

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// <--- Делегування подій --->

// const box = document.querySelector("div.box");

// box.addEventListener("click", function (event) {
//   console.log(event.target);
// });

// <--- Перевірка цільового елемента події --->

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

//*
//
// ---------------------------<!-- Деструктуризація -->-----------------------
//
//*

// Без деструктуризації робота з властивостями об'єкта має такий вигляд:

// const user = {
//   name: "Jacob",
//   age: 32,
// };

// console.log(user.name); // Jacob
// console.log(user.age); // 32

// Із деструктуризацією робота з властивостями об'єкта має такий вигляд:

// const user = {
//   name: "Jacob",
//   age: 32,
// };

// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32

// <--- Деструктуризація об'єктів --->

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// Деструктуризуємо
// const { title, author, isPublic, rating } = book;

// Використовуємо
// const accessType = isPublic ? "public" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
// console.log(accessType);
// console.log(message);

// <--- Деструктуризація неіснуючих властивостей --->

// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, використовуючи знак =. Це значення буде присвоєно тільки у випадку, коли в об'єкті відсутня властивість із таким ім'ям.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//   title,
//   author,
//   coverImage = "<https://via.placeholder.com/640/480>",
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "<https://via.placeholder.com/640/480>"

// <--- Перейменування змінної --->

// Під час деструктуризації можна перейменувати змінну, в яку розпаковується значення властивості, використовуючи :.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38

// <--- Значення за замовчуванням --->

// При перейменуванні змінної, в яку ми розпаковуємо значення властивості об'єкта, також можна присвоїти значення за замовчуванням.

// Для цього після нового імені ставимо дорівнює = і вказуємо її значення за замовчуванням.

// const book = {
//   title: "The Last Kingdom",
//   coverImage:
//     "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>",
// };

// const {
//   title,
//   coverImage: bookCoverImage = "<https://via.placeholder.com/640/480>",
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>"

// Якщо така властивість існує в об'єкті, у змінну буде присвоєно її значення.

// В іншому випадку змінній буде присвоєно значення за замовчуванням.

// const book = {
//   title: "The Dream of a Ridiculous Man",
// };

// const {
//   title,
//   coverImage: bookCoverImage = "<https://via.placeholder.com/640/480>",
// } = book;

// console.log(title); // "The Dream of a Ridiculous Man"
// console.log(bookCoverImage); // "<https://via.placeholder.com/640/480>"

// <--- Деструктуризація в циклах --->

// Під час ітерації по масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта в локальні змінні в тілі циклу.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// <--- Деструктуризація параметрів --->

// Під час передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дає змогу явно вказати, які поля об'єкта використовуються у функції.

// Без деструктуризації об'єкта:

// function printUserInfo(user) {
//   console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }

// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing

// З деструктуризацією об'єкта в тілі функції:

// function printUserInfo(user) {
//   const { name, age, hobby } = user;
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//   name: "Alice",
//   age: 25,
//   hobby: "dancing",
// }); // Name: Alice, Age: 25, Hobby: dancing

// Із деструктуризацією об'єкта в місці оголошення параметрів:

// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//   name: "Alice",
//   age: 25,
//   hobby: "dancing",
// }); // Name: Alice, Age: 25, Hobby: dancing

// <--- Патерн «Об'єкт параметрів» --->

// Якщо функція приймає більше 2-3 параметрів, дуже просто заплутатися, в якій послідовності і що передавати.

// В результаті виходить дуже неочевидний код у місці її виклику.

// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// Патерн «Об'єкт параметрів» допомагає вирішити цю проблему.

// Він заміняє набір параметрів всього одним — об'єктом з іменованими властивостями.

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.pages);
//   // І так далі
// }

// Таким чином, під час її виклику передаємо один об'єкт з необхідними властивостями.

// // ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// <--- Глибока деструктуризація --->

// Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності.

// Так, наприклад, може виглядати об'єкт, що описує користувача соцмережі.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи. Для початку напишемо код деструктуризації властивостей об'єкта користувача.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, stats } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }

// Тепер додамо глибоку деструктуризацію властивостей об'єкта stats.

// Для цього в деструктуризації після імені властивості ставимо двокрапку : та починаємо деструктуризацію об'єкта для цієї властивості.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// Під час глибокої деструктуризації також можна змінювати імена змінних і присвоювати значення за замовчуванням, використовуючи вже знайомий тобі синтаксис.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
