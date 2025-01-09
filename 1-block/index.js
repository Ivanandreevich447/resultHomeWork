/*1.2*/
// alert("Запускаем таймер");

// const timer = [5, 4, 3, 2, 1, 0]
// for(let time of timer) {
//     alert(time);
// }
// alert("Обратный отсчет закончен");

/*1.3*/
// const info = ['Брендан Эйх', '10', '1995 год', 'JavaScript — это не Java', 'ECMAScript']
// for(let answer of info) {
// console.log(answer);
// }

/*1.4*/
// prompt("Сколько будет 2 + 2?");
// alert(" если ты ответил 4, то ты прав");
// prompt("Чему равен корень из 9");
// alert("если ты ответил 3, то ты прав.");
// prompt("Сколько будет 2 в 5-й степени? ");
// alert(" если ты ответил 32, то ты прав.");
/*не придумал,как сделать по-другому*/

/*2.1*/
//JavaScript-код с созданием переменных

/* автор
Чувашев Иван */

/*2.2*/
// A что const не отделяю ;  а консоль ставлю - это не очень? лучше кажое действие вообще тогда разделять,раз начал ?

// const myName = 'Ivan'
// console.log(myName);

// const mySurname = 'Chuv'
// console.log(mySurname);

// let myFavoriteDrink = 'water'
// console.log(myFavoriteDrink);

// let myFavoriteAnimal = 'cat'
// console.log(myFavoriteAnimal);

// let myFavoriteProgrammingLanguage = 'js'
// console.log(myFavoriteProgrammingLanguage);

/*2.3*/
// const carName = 'audi'
// alert(`марка машины ${carName}`)

// let maxSpeed = 444
// alert(`максимальная скорость ${maxSpeed} км/ч у ${carName}`)
// let carOwner = 'его нет'
// alert(`владелец : ${carOwner}`)

/*2.4*/
// let maxSpeed = 444
// maxSpeed = 333
// console.log(`У машины изменилась скорость на ${maxSpeed} km/h`);

// maxSpeed = 222
// console.log(`У машины изменилась скорость на ${maxSpeed} km/h`);

// maxSpeed = 555
// console.log(`У машины изменилась скорость на ${maxSpeed} km/h`);

// let carOwner = 'его нет'
// carOwner = 'petya'

// console.log('У машины изменился владелец:', carOwner);

// carOwner = 'sanya'
// console.log('У машины изменился владелец:', carOwner);

// carOwner = 'dima '
// console.log('У машины изменился владелец:', carOwner);

/*2.5*/
// const question1 = 'Какая самая маленькая страна мира по населению?'
// const question2 = 'Какая самая большая страна мира по населению?'
// const question3 = 'Какой самый большой материк на планете?'

// const answer1 = 'Китай'
// const answer2 = 'Евразия'
// const answer3 = 'Ватикан'
//  console.log(question1, 'Ответ:', answer3);
//  console.log(question2, 'Ответ:', answer1);
//  console.log(question3, 'Ответ:', answer2);

// const age = 20;
// console.log('age', age, typeof age)

/*3.1*/
// const name = 'Ivan'
// console.log(name , typeof name);

// let age = 29
// console.log(age, typeof age);

// let ILiveSochi = true
// console.log(ILiveSochi, typeof ILiveSochi);

// let myCar = null
// console.log(myCar, typeof myCar);

// const myNewCar = undefined
// console.log(myNewCar, typeof myNewCar);

// let bigInt = 2341431413n
// console.log(bigInt, typeof bigInt);

// let id = Symbol('id')
// console.log(id, typeof id);

// let person =  {
//     name: 'ivan',
//     age : 29
// }
// console.log(person, typeof person);

/*3.2*/
// let newYear = 2025
// newYear = '2025'  /*String(newYear)*/
// alert(newYear)

// let age = '29'
// // age = +age
// alert(age)

// let arr = true
// haveName = null
// alert(haveName)

/*3.3*/
// let ageOfPerson1 = 18;
// let ageOfPerson2 = '20';
// ageOfPerson1 = ageOfPerson2
// console.log(ageOfPerson2, typeof ageOfPerson2);

// let nameOfAnimal1 = null;
// let nameOfAnimal2 = 'Charlie';
// nameOfAnimal2 = nameOfAnimal1
// console.log(nameOfAnimal2, typeof nameOfAnimal2);  //исключение

// const bestProgrammingLanguage1 = 'JavaScript';
// const bestProgrammingLanguage2 = 'Java';

// let initialValue1;
// let initialValue2 = 0;
// initialValue2 = initialValue1
// console.log(initialValue2, typeof initialValue2
// );

// var isJavaScriptProgrammer1 = true;
// var isJavaScriptProgrammer2 = false;

// let helloText1 = 'Hello!';
// let helloText2 = 'Привет!';
// helloText2 = helloText1
// console.log(helloText2, typeof helloText2);

/*4.1  - как предлагал немного усложнить задания, объект добавил через typeof- а то не определялось точно как объект */

// const typing = ['ivan', 29, true, null, undefined, 432n, { name: 'Maxim' }, Symbol()]  //как и писали Sumbol - ошибка

// for(let type of typing) {
// console.log(Number(type), String(type), Boolean(type));
// }
// console.log(typing); /*не особа и нужен тут вывод в консоль*/

/*4.2*/

// //1
// console.log(+'50', typeof Number('50')) //неявное
// console.log(Number('50'));
// //2
// console.log(Number('100'), typeof Number('100')) //явное
// //3
// console.log('' + 1, typeof ('' + 1)) //неявное
// console.log(String(1));
// //4›
// console.log(String(1), typeof String(1)) //явное
// //5
// console.log(Boolean(0), typeof Boolean(0))// явное
// //6
// console.log(+'001', typeof (+'001')) //неявное
// console.log(Number(001));
// //7
// console.log(1 + '' , typeof(1 + '')) //неявное
// console.log(String(1));
// //8
// console.log(Boolean(1), typeof Boolean(1)) //явное
// //9
// console.log(String(001), typeof String(001)) //явное
// //10
// console.log(Number('Hello World'), typeof Number('Hello World')) //явное

/*4.3*/
// const arrow = [console.log, Number, '', 0, -10, '-105', { name: 'Maxim' }, Symbol('key')]
// for(let arr of arrow) {
//     console.log(String(arr), Boolean(arr), Number(arr) );
// }
// console.log(arrow);

/*4.4*/

// // 1
// console.log(Number(' 1 2 3 4 5')); //12345 - не знал, думал уберет лишние пробелы
// // 2
// console.log(Number('1234 5'));//12345
// // 3
// console.log(Number('12345'));//12345
// // 4
// console.log(String(false));//'false'
// // 5
// console.log(Boolean(0000000)); //true - походу 0 и 0000 одно и тоже
// // 6
// console.log(Boolean(0.0000001)); //true
// // 7
// console.log(String(undefined)); //undefiend
// // 8
// console.log(Number('100f')); // nan
// // 9
// console.log(Number('100')); //100
// // 10
// console.log(Number('000001')); //1

/*5.1*/
// const myName = 'Иван'
// const programmingLanguage = 'JavaScript'
// const courseCreatorName = 'Vladilen'
// const reasonText = 'хочу сменить сферу деятельности с зубного техника на новое'
// const numberOfMonth = '2'
// console.log(`Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`);

// /*5.2*/
// const myName = 'Иван'
// const programmingLanguage = 'JavaScript'
// const courseCreatorName = 'Vladilen'
// const reasonText = 'хочу сменить сферу деятельности с зубного техника на новое'
// const numberOfMonth = '2'

// let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`

// myInfoText = myInfoText.replaceAll('JavaScript', 'javascript')
// myInfoText = myInfoText.replaceAll('курс' , 'КУРС')

// // console.log(myInfoText);
// // console.log(myInfoText.length);

// console.log(myInfoText,'\n',
//     myInfoText.length,'\n',
//      myInfoText[0], myInfoText[myInfoText.length - 1]);

// // /*5.3-4   преобразовал в число по разному,чтоб явно и не явно */
// // const userName = prompt('Как Вас зовут?').toLocaleLowerCase().trim()

// // // const userAge = Number(prompt('Сколько вам лет?').trim())
// // const userAge = +prompt('Сколько вам лет?').trim()

// // console.log(`Вас зовут: ${userName} и вам ${userAge} лет`, typeof splituserAge);

// // /*5.5*/
// const userString = prompt('Введите строку обрезки').trim()
// const startSliceIndex = +prompt('Введите индекс, с которого нужно начать обрезку строки')
// const endSliceIndex = +prompt('Введите индекс, которым нужно закончить обрезку строки')
// alert(userString.slice(startSliceIndex, endSliceIndex))

// // /*5.6  если не переводить в массив и обратно, то на слове "я" - уберет не слово , а первую попавшуюся эту букву в слове*/
// // меня зовут ваня, я сижу учусь дома -для проверки

// const userText = prompt('Введите текст').trim().split(' ')
//  //тут убрал пробелы, перевел в массив ,где каждое слово через запятую

//  console.log(userText);
// const wordFromText = prompt('Введите слово из текста').trim() //слово из текста выше без пробелов


// const indexOfWord = userText.indexOf(wordFromText) //ищу индекс слова из текста

// // console.log(indexOfWord);
// // console.log(wordFromText);

// userText = alert(`Результат обрезаной строки: ${userText.slice(0, indexOfWord).join(' ')}`)

// console.log(userText.slice(0, indexOfWord).join(' ')); // выполняю главное задание - обрезать строку с 0 индекса до слова введенного. так же перевожу массив обратно в строку

// /*6.1*/
// // const existingUserLogin = 'the_best_user'
// // const existingUserPassword = 12345678

// // const userLogin = prompt('Введите логин!').trim()
// // const userPassword = +prompt('Введите пароль!').trim() // выше задали число и строгму равенству должно прийти тип тоже число

// // /* console.log(typeof userPassword); */

// // if(existingUserLogin === userLogin && existingUserPassword === userPassword ) {
// //     console.log(`Добро пожаловать ${userLogin}!!`);
// // } else {
// //     console.log('Логин и (или) Пароль введены неверно!');
// // }

// /*6.2*/
// const answerOne = 4;
// const answerTwo = 4;
// const answerThree = 1;
// const answerFour = 12;
// const answerFive = 6;

// // let answer = 4
// // answer = 4
// // answer = 1
// // answer = 12
// // answer = 6

// let correctAnswers = 0;
// let incorrectAnswers = 0;

// const taskOne = +prompt("Сколько будет 2 + 2?").trim();
// // let compare = taskOne === answerOne ? alert('Ответ верный!') : alert('Ответ неверный!');

// if (taskOne === answerOne) {
//   alert("Ответ верный!");
//   correctAnswers++;
// } else {
//   alert("Ответ неверный!");
//   incorrectAnswers++;
// }
// console.log();
// const taskTwo = +prompt("Сколько будет 2 * 2?").trim();

// // compare = taskTwo === answerTwo ? alert('Ответ верный!') : alert('Ответ неверный!');

// if (taskTwo === answerTwo) {
//   alert("Ответ верный!");
//   correctAnswers++;
// } else {
//   alert("Ответ неверный!");
//   incorrectAnswers++;
// }

// const taskThree = +prompt(
//   "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
// ).trim();
// if (taskThree === answerThree) {
//   alert("Ответ верный!");
//   correctAnswers++;
// } else {
//   alert("Ответ неверный!");
//   incorrectAnswers++;
// }

// const taskFour = +prompt(
//   "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
// ).trim();
// if (taskFour === answerFour) {
//   alert("Ответ верный!");
//   correctAnswers++;
// } else {
//   alert("Ответ неверный!");
//   incorrectAnswers++;
// }

// const taskFive = +prompt("Сколько будет 2 + 2 * 2?").trim();
// if (taskFive === answerFive) {
//   alert("Ответ верный!");
//   correctAnswers++;
// } else {
//   alert("Ответ неверный!");
//   incorrectAnswers++;
// }

// alert(
//   `Конец теста ! \n
//   Правльных ответов : ${correctAnswers}, \n
//   неправильных : ${incorrectAnswers}.`
// );

// /*6.3*/
// let res = confirm('JavaScript появился в 1995 году?')
// if(res) {
//     alert('Верно')
// } else {
//     alert('Не угадал..')
// }

//  res = confirm ('Спецификация JavaScript называется ECMAScrip?')

// if(res) {
//     alert('Верно')
// } else {
//     alert('Не угадал..')
// }

//  res = confirm ('JavaScript был создан за 1 месяц?')
// if(res) {
//     alert('за 10 дней')
// } else {
//     alert('Верно')
// }

// /*6.4*/

// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//       newStudent = newStudent.trim();
//       alert(`Добро пожаловать, ${newStudent}!`)
//     }
//   }

// let i = 0;
// while (i < 3) {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}`);
//   }
//   i++;
// }

// let i = 0;
// do {
//     let newStudent = prompt("Введите имя нового студента!");
//       if (newStudent)
//         newStudent = newStudent.trim();
//         alert(`Добро пожаловать, ${newStudent}`);
//         i++
// } while (i < 3)

// /*6.5*/

// let sum = 0;  //начальная сумма равна 0
// for (let i = 0; i <= 100; i++) { //пока не равно 100 работает цикл с итарацией ++
// sum += i   //тут к сумму(0) я + итерацию и на каждом круге мы + новое значение
// }
// alert(sum); // готовый ответ без кажого шага

// доп уроки

/* #1 */

// let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

// javaScriptSlice = javaScriptDescription.slice(1, Math.floor(javaScriptDescription.length / 2)).replaceAll('а', 'А').replaceAll('a', 'A') /*нашел середину строки с округлением/ заменил буквы */

// javaScriptSlice = javaScriptSlice.replaceAll(' ', '').repeat(3) /* в новой,чтоб проще читать код- убрал пробелы и репит(3 раза повторил строку) */
// console.log(javaScriptSlice[Math.floor(javaScriptSlice.length / 2)]);
// console.log(javaScriptSlice);

/* # 1 */

// let clientName = "Игорек";
// let clientSpentForAllTime = 110; //сколько всего потратил
// let clientSpentToday = 25; //сколько вышло за псоледний визит


// let discount;
// if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
//   discount = 10;
//   alert(`Вам предоставляется скидка в ${discount}%`)
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500) {
//   discount = 20;
//   alert(`Вам предоставляется скидка в ${discount}%`)
// } else if (clientSpentForAllTime >= 500) {
//     discount = 30;
//     alert(`Вам предоставляется скидка в ${discount}%`)
// } else {
//     discount = 0;
//     alert(`Вам предоставляется скидка в ${discount}%`)
// }


// clientSpentToday = (clientSpentToday - (clientSpentToday /100 * discount)) // сколько выйдет по скидке за рестик сегодня

// clientSpentForAllTime += Number(clientSpentToday); // сумма всех затрат с учетом скидок


// alert(`Спасибо, ${clientName} ! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)




/* # 2 */

// clientName = prompt('Введите имя клиента')


// clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'))

// // переменная является NaN? или строка пустая - выдай это заверши код/ если ввел число - код идет дальше просто
// if(isNaN(clientSpentToday) || clientSpentToday == '' ) {
//      alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку');
//     script.stop }
   

// clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'))

// if(isNaN(clientSpentForAllTime) || clientSpentForAllTime == ''){
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку');
//     script.stop }

// clientSpentForAllTime += Number(clientSpentToday); // сумма всех затрат с учетом скидок

// let discount;
// if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
//   discount = 10;
//   alert(`Вам предоставляется скидка в ${discount}%`)
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500) {
//   discount = 20;
//   alert(`Вам предоставляется скидка в ${discount}%`)
// } else if (clientSpentForAllTime >= 500) {
//     discount = 30;
//     alert(`Вам предоставляется скидка в ${discount}%`)
// } else {
//     discount = 0;
//     alert(`Вам предоставляется скидка в ${discount}%`) }

//     clientSpentToday = (clientSpentToday - (clientSpentToday /100 * discount)) // сколько выйдет по скидке за рестик сегодня


//     alert(`Спасибо, ${clientName} ! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)

// let userPassword = prompt('Введите пароль')

// if(userPassword.length >= 3 && userPassword.lengt <= 30 && userPassword === userPassword.toUpperCase() )


/* # 3 */


// let userPassword = prompt('Введите пароль')


// ///[A-ZА-Я]/.test(userPassword) - проверка на заглавные буквы и [0-9] символы - есть хоть 1 - тру
// if(Number(userPassword.length) >= 3 && Number(userPassword.length) <= 30 && /[A-ZА-Я]/.test(userPassword) && /[0-9]/.test(userPassword) ) {
//     alert('Пароль валидный')
// } else {
//     alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
// }