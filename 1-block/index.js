/*1.2*/
// console.log("Запускаем таймер");

// const timer = [5, 4, 3, 2, 1, 0]
// for(let time of timer) {
//     console.log(time);
// }
// console.log("Обратный отсчет закончен");


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
// //4
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
//     console.log(String(arr), String(arr), Number(arr) );
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

// let newText = myInfoText.replaceAll('JavaScript', 'javascript').replaceAll('курс' , 'КУРС')
// console.log(newText);

// console.log(myInfoText.replaceAll('JavaScript', 'javascript').replaceAll('курс' , 'КУРС')); //не совсем понял через новую или старую перменную надо вывести

// console.log(myInfoText.length);

// console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);




// /*5.3-4   преобразовал в число по разному,чтоб явно и не явно */ 
// const userName = prompt('Как Вас зовут?').toLocaleLowerCase().trim()

// // const userAge = Number(prompt('Сколько вам лет?').trim())
// const userAge = +prompt('Сколько вам лет?').trim() 

// console.log(`Вас зовут: ${userName} и вам ${userAge} лет`, typeof userAge);




// /*5.5*/
// const userString = prompt('Введите строку обрезки').trim()
// const startSliceIndex = +prompt('Введите индекс, с которого нужно начать обрезку строки')
// const endSliceIndex = +prompt('Введите индекс, которым нужно закончить обрезку строки')
// alert(userString.slice(startSliceIndex, endSliceIndex))





// /*5.6  если не переводить в массив и обратно, то на слове "я" - уберет не слово , а первую попавшуюся эту букву в слове*/
// меня зовут ваня, я сижу учусь дома -для проверки

// const userText = prompt('Введите текст').trim().split(' ')
//  //тут убрал пробелы, перевел в массив ,где каждое слово через запятую

// const wordFromText = prompt('Введите слово из текста').trim() //слово из текста выше без пробелов

// const indexOfWord = userText.indexOf(wordFromText) //ищу индекс слова из текста

// /*console.log(indexOfWord);
// console.log(wordFromText);*/ 

// alert(`Результат обрезаной строки: ${userText.slice(0, indexOfWord).join(' ')}`)
// // console.log(userText.slice(0, indexOfWord).join(' ')); // выполняю главное задание - обрезать строку с 0 индекса до слова введенного. так же перевожу массив обратно в строку


