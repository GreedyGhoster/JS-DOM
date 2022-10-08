"use strick";
// alert("Я изучаю js");

// let mainAdmin;
// let userName = "Джон";
// mainAdmin = userName;
// alert(userName);
// alert(mainAdmin);
// const ourPLANET = "Earth";
// let currentNewUser;

// let x = confirm("You da");
// x ? alert("Ladno") : alert("NuLadno");

// alert(`Your name: ${prompt("Your name")}`);

// let UserYears = prompt("How old are you");
// let Years =
//   UserYears < 10
//     ? "Hi baby"
//     : UserYears < 18
//     ? "Hi teenager"
//     : UserYears <= 100
//     ? "Hello"
//     : "You are a Vampire!!!";
// With if, else if, else:
// alert(Years);
// let age = prompt("How old are you?");
// if (age < 10) {
//   alert("hi baby");
// } else if (age < 19) {
//   alert("hi teenager");
// } else if (age < 100) {
//   alert("Hello mister(missis)");
// } else {
//   alert("You are a vampire");
// }

// let Item = prompt("Who created JS?");
// if (Item == "Netscape") {
//   alert("Very good");
// } else {
//   alert("This is Netscape");
// }

// let x = prompt("Number");
// if (x > 0) {
//   alert(1);
// } else if (x < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result;
// if (a + b < 4) {
// result = 'Мало';
// } else {
// result = 'Много';
// }
// =>
// let result;
// a + b < 4 ? (result = "Few") : (result = "many");

// let message;
// if (login == 'Сотрудник') {
// message = 'Привет';
// } else if (login == 'Директор') {
// message = 'Здравствуйте';
// } else if (login == '') {
// message = 'Нет логина';
// } else {
// message = '';
// }
// =>
// let login = prompt("Your job?");
// login == "Сотрудник"
//   ? alert("Hi")
//   : login == "Директор"
//   ? alert("Hello")
//   : login == ""
//   ? alert("No login")
//   : alert("");

// let Log = prompt("Логин");
// if (Log == "Админ") {
//   let Pass = prompt("Пароль");
//   if (Pass == "Я главный") {
//     alert("Здравствуйте");
//   } else {
//     alert("Отмена доступа");
//   }
// } else {
//   alert("Я вас не знаю");
// }

// let height = 0;
// alert(height || 100); // 100
// alert(height ?? 100); // 0

// let a1 = prompt("Чему равно a?:  ");
// let b1 = prompt("Чему равно b?:  ");
// let c1 = prompt("Чему равно c?:  ");
// let a = +a1;
// let b = +b1;
// let c = +c1;
// let D = b ** 2 - 4 * a * c;
// if (D > 0) {
//   let x1 = (-b - Math.sqrt(D)) / (2 * a);
//   let x2 = (-b + Math.sqrt(D)) / (2 * a);
//   alert(`Ваши корни ${x1} и ${x2}`);
// } else if (D == 0) {
//   let x = -b / (2 * a);
//   alert(`Ваш ответ ${x}`);
// } else {
//   alert("Нет корней");
// }

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert("Маловато");
//     break;
//   case 4:
//     alert("В точку!");
//     break;
//   case 5:
//     alert("Перебор");
//     break;
//   default:
//     alert("Нет таких значений");
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("А родители разрешили?");
//   }
// }
// let age = prompt("Сколько вам лет?", 18);
// if (checkAge(age)) {
//   alert("Доступ получен");
// } else {
//   alert("Доступ закрыт");
// }
// HZZZZ
// function checkAge(age) {
//   age > 18 ? true : confirm("А родители разрешили?");
// }
// let age = prompt("Сколько тебе лет?");
// checkAge(age) ? alert("Доступ разрешен") : alert("Доступ закрыт");
