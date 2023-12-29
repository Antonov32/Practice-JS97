// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ["Ivan", "Maria", "Anna"];

// function sayHi(names) {
//   return names.map((name) => `${name} привіт!`);
// }
// console.log(sayHi(names));

//*
//
// ------------------------------------------------------------
//
//*

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//   .flatMap((course) => course.topics)
//   .filter((element, index, arr) => arr.indexOf(element) === index);

// console.log(allTopics);

//*
//
// ------------------------------------------------------------
//
//*

// Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// Перевірте чи став об'єкт apples  прототипом для об'єкта fuji.
// Додайте об'єкту fuji властивість color: 'pink'  і виведіть його у консоль.
// Виведіть у консоль значення властивості type для об'єкту fuji.
// Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

// const apples = {
//   type: "fruit",
//   cookingMethod: ["jam", "juice", "baked", "dried", "fresh"],
//   vitamins: ["A", "B1", "B2", "E"],
// };

// const fuji = Object.create(apples);

// console.log(apples.isPrototypeOf(fuji));

// fuji.color = "pink";

// console.log(fuji.type);

// console.log(apples.hasOwnProperty("vitamins"));
// console.log(fuji.hasOwnProperty("vitamins"));

//*
//
// ------------------------------------------------------------
//
//*

//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку площі прямокутника.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle(20, 30);
// console.log(rectangle.calculateArea());
// console.log(rectangle);

//*
//
// ------------------------------------------------------------
//
//*

//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const Ivan = new Client("Ivan", "111@gmail.com");
// console.log(Ivan.login);
// Ivan.email = "11112455@gmail";
// console.log(Ivan.email);
// Ivan.login = "Nikolay";
// console.log(Ivan.login);

//*
//
// ------------------------------------------------------------
//
//*

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

//*
//
// ------------------------------------------------------------
//
//*

// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`

// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   withdraw(amount) {
//     if ((this.balance -= amount)) {
//       return `Знято ${amount} грн. Залишок на рахунку: ${this.balance} грн.`;
//     } else {
//       this.balance >= amount;
//       return "Недостатньо коштів на рахунку.";
//     }
//   }

//   deposit(amount) {
//     this.balance += amount;
//     return `Поповнено ${amount} грн. Залишок на рахунку: ${this.balance} грн.`;
//   }

//   checkBalance() {
//     return `Залишок на рахунку: ${this.balance} грн.`;
//   }
// }

// const account1 = new BankAccount("123456789101112", 5000);
// console.log(account1.checkBalance());
// console.log(account1.deposit(500));
// console.log(account1.withdraw(500));

//*
//
// ------------------------------------------------------------
//
//*

// Написати клас StudentList, котрий має приватну властивість students - масив для зберігання імен студентів.
// Додайте метод addStudent, отримує аргументом ім'я студента, цей метод буде додавати ім'я студента в масив students,
// в масиві зберігаються тільки унікальні імена. Вивести в консоль рядок `Студента student додано до списку.`
// або`Студент student вже є в списку.` якщо такий студент вже є.
// Додайте метод removeStudent, отримує аргументом ім'я студента, видаляє студента з масиву students, якщо такий є.
// Вивести в консоль рядок `Студента stud
// Додайте метод getStudents, який виводить масив всіх студентів student видалено зі списку.` або `Студента student не знайдено в списку.`

// Додайте метод clearList, який очищає масив студентв і виводить повідомлення "Список студентів очищено."

//*
//
// ------------------------------------------------------------
//
//*

// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {
//   #price;
//   static maxPrice = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Оголошений клас Car
// Клас Car містить статичну властивість maxPrice
// Значення статичної властивості maxPrice - це число 50000
// Екземпляр не містить властивості maxPrice
// В класі Car оголошений геттер price
// В класі Car оголошений сеттер price
// Виклик сеттера price в екземпляра класу, зі значенням аргументу меншим за значення maxPrice, змінює властивість #price
// Виклик сеттера price в екземпляра класу, зі значенням аргументу більшим за значення maxPrice, не змінює властивість #price

//*
//
// ------------------------------------------------------------
//
//*

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return "Error! Price exceeds the maximum";
//     } else {
//       return "Success! Price is within acceptable limits";
//     }
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Car.checkPrice(36000); // повертає рядок "Success! Price is within acceptable limits"
// Car.checkPrice(18000); // повертає рядок "Success! Price is within acceptable limits"
// Car.checkPrice(64000); // повертає рядок "Error! Price exceeds the maximum"
// Car.checkPrice(57000); // повертає рядок "Error! Price exceeds the maximum"

//*
//
// ------------------------------------------------------------
//
//*

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, access }) {
//     super(email);
//     this.blacklistedEmails = [];
//     this.access = access;
//   }

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну властивість blacklistedEmails
// Клас Admin містить публічний метод blacklist
// Клас Admin містить публічний метод isBlacklisted
// Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
// Виклик mango.isBlacklisted("mango@mail.com") повертає false
// Виклик mango.isBlacklisted("poly@mail.com") повертає true

//*
//
// ---------------------------<!-- Practice Lodash -->-----------------------
//
//*

// _.sum — він обчислює суму значень у масиві

// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// _.shuffle - створює масив перетасованих значень

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

//*
//
// ---------------------------<!-- Вебсховище -->-----------------------
//
//*

// <--- Додавання даних --->

// localStorage.setItem("ui-theme", "black");
// console.log(localStorage);

// <--- Додавання складних даних --->

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));
// console.log(localStorage);

// <--- Отримання даних --->

// Метод getItem(key) дозволяє зчитати зі сховища запис із ключем key і повертає його значення у JSON форматі.

// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "black"

// Якщо у сховищі відсутній запис з таким ключем, метод повертає null.

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

// Якщо значення є примітивним типом, немає потреби його парсити.

// В іншому випадку, якщо це масив або об'єкт, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// У змінній savedSettings буде рядок, що представляє об'єкт, тому ми розпарсюємо це значення, і у змінній parsedSettings отримуємо повноцінний об'єкт із властивостями.

// <--- Видалення даних --->

// Метод removeItem(key) видаляє зі сховища існуючий запис з ключем key. В результаті своєї роботи він не повертає значення.

// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

// Якщо ти хочеш повністю очистити сховище, потрібно викликати метод clear().

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

// Операція повного очищення сховища є ризикованою. Вона може порушити записи, створені іншими розробниками проєкту. Краще видаляти лише ті записи, які дійсно не потрібні, не покладаючись на повну очистку даних сховища.

// <--- Сховище сесії --->

// Єдиний виняток — звертаємося до них через об'єкт sessionStorage, а не localStorage.

// console.log(window.sessionStorage); // Storage {length: 0}

// Методом setItem(key, value) можна записувати як рядки, так і складні типи даних.

// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// Методом getItem(key) можна читати записи, використовуючи збережений ключ.

// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// І звісно, видаляти елементи за ключем і очищати сховище цілком методами removeItem(key) і clear() відповідно.

// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}

// <--- Кейс: Форма з повідомленням --->

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
