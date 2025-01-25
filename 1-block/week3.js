/*10.1 */
function task1 () {
    const users = [
        {
          username: 'David',
          status: 'online',
          lastActivity: 10
        },
        {
          username: 'Lucy',
          status: 'offline',
          lastActivity: 22
        },
        {
              username: 'Bob',
              status: 'online',
              lastActivity: 104
            }
    ];
    
    // console.log(users[0].status);
    // console.log(users);
    // console.log();
    
    let onlineUsers = users.filter((online) => 
        online.status === 'online'
    )
    
    const nameUsers = onlineUsers.map(users => {
        return users.username
    
        })
    // console.log(nameUsers);
    
    const usersOnlineNames = nameUsers.join(', ')
    console.log(`Сейчас в онлайн следующие игроки ${usersOnlineNames}.`);
    
}
task1()

/*10.2 */

function task2 () {
    const orders = [4, 2, 1, 3];

    const patients = [
       { id: 1, name: "Максим" },
       { id: 2, name: "Николай" },
       { id: 3, name: "Ангелина" },
       { id: 4, name: "Виталий" },
    ];
    
    function giveTalonsInOrder (patients, orders) {
        let res = []  //создал массив пустой
        for(let order of orders) {   //делаю перебор массива с номерами
            const patient = patients.find(patient => patient.id === order); //нахожу пациента с ид === номеру с перебора выше
                res.push(patient); // добавляю в пустой массив ,что нашли в поиске
        } 
          console.log(res);
        }
        giveTalonsInOrder(patients, orders)
    
}


/*10.3 */

function task3 () {
    function handleObject(obj, key, action) {
        if(action === 'get') {
           return obj[key]    //не забывать ретерн - без возврата фнкц не остановится
    
        } 
        if (action === 'add' ) {
           obj.key = '' 
           return obj 
    
        } 
         if (action === 'delete') {
          delete obj[key]
          return obj
        }
       
    return obj
    // console.log(obj);
    
    }
    
    const student = {
        name: 'Maxim',
        programmingLanguage: 'JavaScript',
     }
    // console.log(student.name);
      
     const result = handleObject(student, 'name', 'add');
     console.log(result);
    
}
task3()


/*10.4 */

function task4() {
    const student = { //есть объект
        fullName: 'Максим',
        experienceInMonths: 12,
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      }
    
    function giveJobToStudent(student, jobName) { //функция с передачей объекта и параметра с новой работой
    const studentJob = { //создаю новый объект ,где есть прошлый + свойство новое
        ...student,
        job : jobName
    }
    console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${studentJob.job}, который владеет ${student.stack}`);
    return studentJob
    }
    giveJobToStudent(student, 'веб-разбработчик') //вызов функции
    
}
// task4()


/*10.5 */
function task5 (){
    // (если параметры пустые и есть только аргументы - могу их вытащить и работать с ними 'arguments')

    function sum () {
    let res = 0
    for(let n of arguments) {
        res += n
    }
    return res
    }
    console.log(sum(1, 2, 3)) // 6

}
task5()


/*11.1 */

//строка.padStart(сколько надо символов, какой добавим в начале) - метод для строк

function task6 () {
    function getDateFormat(date, separator)  {
        const getYear = date.getFullYear()
        const getMonth = String(date.getMonth() + 1).padStart(2, 0) 
        const getDays = String(date.getDate()).padStart(2, 0)
        
        console.log(`${getYear}${separator}${getMonth}${separator}${getDays}`);
        }
        
        const date = new Date()
        // console.log(date);
        getDateFormat(date, '.') //разделитель 
}
task6()

/*date = String(new Date()) //перевод в строку по заданию
console.log(typeof date); // проверка- строка*/


/*11.2 */ 
//почему-то после обертки задачи в функцию - консоль выводит 2 раза ответ итоговый

function task6() {
    function getDaysBeforeBirthday(nextBirthdayDate) {
    
        const now = new Date()
        const difference = nextBirthdayDate.getTime() - now.getTime()
        
        return difference
        }
        
        const nextBirthdayDate = new Date(2025, 9, 16)
        const convertGetDay = getDaysBeforeBirthday(nextBirthdayDate)
        
        function convertMsToDays (convertGetDay) {// для удобства могу назвать параметр иначе- короче и дальше тоже с ним работать

        const days = Math.round(convertGetDay / (1000 * 60 * 60 *24))
        
        console.log(`до др осталось всего.. ${days} дней!`);
        }

        convertMsToDays(convertGetDay)
}
task6()




/*11.3 */
//прибавляет дни -работает
// не понимаю, мне надо выводить мс в результате или просто дату новую


function task7 () {
    function addDays(date, days) {

        const getDay = date.getDate() // получил день из даты
        const currentDay = date.setDate(getDay + days) // прибавил день к дате из параметра все в мс
        
        console.log(date); // дата + день 
        console.log(currentDay); // новая дата в мс
        }
        date = new Date(2000)
        
        addDays(date, 12)
    
}
task7()