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
// ---------------------------<!-- Practice Modul 7 -->-----------------------
//
//*

console.log();
