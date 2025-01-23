/*10.1 */

// const users = [
// 	{
// 	  username: 'David',
// 	  status: 'online',
// 	  lastActivity: 10
// 	},
// 	{
// 	  username: 'Lucy',
// 	  status: 'offline',
// 	  lastActivity: 22
// 	},
// 	{
//           username: 'Bob',
//           status: 'online',
//           lastActivity: 104
//         }
// ];

// // console.log(users[0].status);
// // console.log(users);
// // console.log();

// let onlineUsers = users.filter((online) => 
//     online.status === 'online'
// )

// const nameUsers = onlineUsers.map(users => {
//     return users.username

//     })
// // console.log(nameUsers);

// const usersOnlineNames = nameUsers.join(', ')
// console.log(`Сейчас в онлайн следующие игроки ${usersOnlineNames}.`);



/*10.2 */


// const orders = [4, 2, 1, 3];

// const patients = [
//    { id: 1, name: "Максим" },
//    { id: 2, name: "Николай" },
//    { id: 3, name: "Ангелина" },
//    { id: 4, name: "Виталий" },
// ];

// function giveTalonsInOrder (patients, orders) {
//     let res = []  //создал массив пустой
//     for(let order of orders) {   //делаю перебор массива с номерами
//         const patient = patients.find(patient => patient.id === order); //нахожу пациента с ид === номеру с перебора выше
//             res.push(patient); // добавляю в пустой массив ,что нашли в поиске
//     } 
//       console.log(res);
//     }
//     giveTalonsInOrder(patients, orders)



/*10.3 */


// function handleObject(obj, key, action) {
//     if(action === 'get') {
//        return obj[key]       //возвтрат значение ключа obj / но возврата нет

//     } 
//     if (action === 'add' ) {
//        obj.key = '' 
//        return obj

//     } 
//      if (action === 'delete') {
//       delete obj[key]
//       return obj
//     }
   
// return obj
// // console.log(obj);

// }

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
//  }
// // console.log(student.name);
  
//  const result = handleObject(student, 'name', 'add');
//  console.log(result);



/*10.4 */

// const student = { //есть объект
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//   }

// function giveJobToStudent(student, jobName) { //функция с передачей объекта и параметра с новой работой
// const studentJob = { //создаю новый объект ,где есть прошлый + свойство новое
//     ...student,
//     job : jobName
// }
// console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${studentJob.job}, который владеет ${student.stack}`);
// return studentJob
// }
// giveJobToStudent(student, 'веб-разбработчик') //вызов функции



/*10.5 */

//(если параметры пустые и есть только аргументы - могу их вытащить и работать с ними 'arguments')

// function sum () {
// let res = 0
// for(let n of arguments) {
//     res += n
// }
// return res
// }
// console.log(sum(1, 2, 3)) // 6

