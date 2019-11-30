"use strict";

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login
// и верни true или false в зависимости от того, попадает ли длина параметра в заданный
// диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и
// добавляемый логин как параметры и проверяет наличие login в массиве allLogins,
// возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку
// 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью
// функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и
// возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает
// строку 'Логин успешно добавлен!'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => {
  const loginLength = login.length;

  return loginLength >= 4 && loginLength <= 16 ? true : false;
};

const isLoginUnique = (allLogins, login) => {
  for (const item of allLogins) {
    if (item === login) {
      return false;
    }
  }

  return true;
};

const addLogin = (allLogins, login) => {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);

      return console.log("Логин успешно добавлен!");
    }
    return console.log("Такой логин уже используется!");
  }
  return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
};

// Вызовы функции для проверки

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
