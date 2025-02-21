            //Callback – это, простыми словами, функция, передаваемая в другую функцию.
            //ЛУЧШЕ ВИДЕО ПОСМОТРЕТЬ НА ЮТУБ


// const firstTodo = 'https://jsonplaceholder.typicode.com/todos/1'

// const getTodo = async (callback) => {
//     try {
//         const response = await fetch(firstTodo) //получаю респонс
//         console.log(response);
//         const todo = await response.json()//получаю что искал после декодирования
//         callback(todo)
//     } catch (error) {
//         console.log(error);
//     }
  
// }

// // getTodo() - так уже не вызывается

// //нужна стрелдочная функция
// getTodo((todoItem) => { // todoItem- название можно любое
//     console.log(todoItem);
// })




                    //Event Loop – бесконечный событийный цикл. Его идея заключается в том, что есть бесконечный цикл, в котором движок языка JavaScript ожидает задачи, выполняет их и снова ожидает появление новых задач.

                    //ссылка на урок
                    //https://lk.result-university.com/pl/teach/control/lesson/view?id=268066853

                    // Call Stack - одна из составляющих Event Loop.
                    
                    //Вообще сам по себе Stack (стек) — это структура данных, элементы в которой действуют по принципу “последним пришел - первым ушел” (LIFO: last in, first out).

                //  Стек можно сравнить с коробкой, в которую мы кладем вещи одну на другую. Чтобы достать самую нижнюю вещь, которую мы положили первой, нам необходимо вытащить то, что находится над ней.


                        //Callback queue

// console.log('start');
// console.log(1);

// setTimeout(function() {
//     console.log(2);
// },0 )

// console.log(3);
// console.log('end');
// Вывод:
// start
// 1
// 3
// end
// 2  - в конце очереди 
//Почему же так происходит? Дело в том, что такие задачи, как setTimeout() или, к примеру, setInterval(), относятся к Web API. То есть они предоставляются браузером и не являются частью движка JavaScript.

//Например, когда вызывается setTimeout(), он передастся на выполнение в Web API. Сразу же начинается отсчет переданного времени, но следующий код программы продолжает выполняться. После того, как Web API закончит свою работу (пройдет переданное время), он передаст callback из setTimeout() в очередь (Callback queue). Эта очередь начнет выполняться после того, как Call Stack полностью очистится.

            //Callback queue реализует структуру данных Queue (очередь). Задачи из очереди выполняются по правилу “первый пришел — первый ушел”  ,   Каждая асинхронная функция проходит через callback queue перед попаданием в Call Stack

//1. Первая задача добавляется в очередь

//2 Также добавляются новые задачи, если они имеются

//3 И, когда движок закончил выполнение задач из Call Stack, он начинает проверять Callback queue. Если в очереди есть задачи, он вынимает и добавляет их в Call Stack по очереди.

// 4 После выполнения всех задач из Callback queue, цикл ждет появления новых задач в очереди (например, если был добавлен слушатель на кнопку, то ждет, пока пользователь нажмет на нее).



                //Одной из макрозадач является выполнение кода от начала до конца

                // Микрозадачи же обычно создаются промисами. Выполнение then(), catch(), finally() становится микрозадачей.
                //  Они, также как и задачи из Web API, добавляются в очередь, которая называется Microtask queue – очередь микрозадач.

                //мИкрозадачи важнее в очереди,чем Callback queue

        //ОЧЕРЕДНОСТЬ ВЫПОЛНЕНИЯ ЗАДАЧ:

// 1. выполнение мАкрозадач(цель дойти до конца и закинуть в очереди задачи,если надо)
// 2. вызвать все ,что есть в очереди мИкрозадач
// 3. вызвать все, что осталось в очереди(Callback queue)


const promise = new Promise((resolve) => {
console.log('in promise');
setTimeout(() => {
console.log('in setTimeout'); //колбэк квик
resolve(); //микрозадача
}, 0);
});

promise.then(() => {//микрозадача
console.log('in then');
})


// in promise
// in then
// promise