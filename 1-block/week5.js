// /*14.1*/

// 1//

function task1 () {
//в обратных ковычках укажу весь код и всё
const $getHTML = `<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`

console.log($getHTML);
}
// task1()


// 2.//

function task2()  {

//создаю form - в него класс
const createUserForm = document.createElement('form')
createUserForm.className = ('create-user-form')

//создаю и наполняю лейбл для имени - помещаю в форм
const labelName = document.createElement('label')
// console.log(label);
labelName.innerText = ('Имя')

//инпут для имени - помещаю в луйбл для имени
const inputName = document.createElement('input')
inputName.type = ('text')
inputName.name = ('userName')
inputName.placeholder = ('Введите ваше имя')

//лейбл для пароля
const labelPassword = document.createElement ('label')
labelPassword.textContent = ('Пароль')

//инп для пароля
const inputPassword = document.createElement('input')
inputPassword.type = ('password')
inputPassword.name = ('password')
inputPassword.placeholder = ('Придумайте Пароль')

//кнопка в самом низу 
const button = document.createElement('button')
button.type = ('submit')
button.innerText = ('Потвердить')


document.body.append(createUserForm)//ВОТ ТАК ВЫЗВАТЬ БОДИ
 
createUserForm.append(labelName) // label в createUserForm -начало

labelName.append(inputName) //в label добавил в начало input

labelName.insertAdjacentElement('afterend', labelPassword) //после лейбла имени добавим с паролем

labelPassword.insertAdjacentElement('beforeend', inputPassword) //в лейбл с пасс добавим шнп с пасс

labelPassword.insertAdjacentElement('afterend', button) //кнопка после лейбл с пасс

console.log(createUserForm);

}
// task2()





/*14.2*/

function task3() {

    const tasks = [
        {
            id: '1138465078061',
            completed: false,
            text: '!Посмотреть новый урок по JavaScript',
        },
        {
            id: '1138465078062',
            completed: false,
            text: 'Выполнить тест после урока',
        },
        {
            id: '1138465078063',
            completed: false,
            text: 'Выполнить ДЗ после урока',
        },
        {
            id: '11384650780613',
            completed: false,
            text: 'понять как это работает',
        },
        {
            id: '11384650780633',
            completed: false,
            text: 'повторить еще раз',
        },
    ];
    
    // function getTask() {
    //     return tasks
    // }
    
    // function createTask (text) {
    //     const newTask = {
    
    //         id : new Date().getTime(),
    //         name : text
    
    // }
    // tasks.push(newTask) 
    // return tasks
    //     }
      
    // function deleteTask (id) {
    //     tasks = tasks.filter((task) => task.id !== id) 
    //         return tasks
    //     }
    
    
       function createTaskElement (task) {//парметр из прендера главный - task - с ним работаю и его вставляю-это 
       
        // obj из массива, откуда вытащу id / name/ может чекбокс значение поменяю и применю
    //в этой функции я хочу записать весь хтмл код через js и хранится все это дело в главном див - taskItem!!!!
    
    //создам все дивы
    const taskItem = document.createElement('div')
    const taskContainer = document.createElement('div')
    const taskContent = document.createElement('div')
    
    //class для div
    
    taskItem.className = ('task-item')
    // taskItem.dataset.taskId =('1') //в задании надо указать ид сюда и в фор / инпут
    taskItem.dataset.taskId = task.id
    
    taskContainer.className = ('task-item__main-container')
    
    taskContent.className = ('task-item__main-content"')
    
    
    //form
    const formCheckbox = document.createElement('form')
    formCheckbox.className = ('checkbox-form')
    
    //input
    const inputCheckbox = document.createElement('input')
    inputCheckbox.className = ('checkbox-form__checkbox')
    inputCheckbox.type = ('checkbox')
    // inputCheckbox.id = ('task-1')//тоже ид указать
    inputCheckbox.id = `task-${task.id}` //в `` НАДО получить task-id / id могу получить через task.id и чтоб чтоб получить task-id изменяемый 1ой строкой пишу ТАК `task-${task.id}`
    
    //label
    const labelTask = document.createElement('label')
    // labelTask.htmlFor = ('task-1')//тоже ид как лебел в задаче
    labelTask.htmlFor = `task-${task.id}`
    
    //form и label - одинаковые значения имеют ВСЕГДА! нужно подставить по задаче наш ID!
    
        //span
    const spanTask = document.createElement('span')
    spanTask.className = ('task-item__text')
    spanTask.textContent = task.text // будем потом каждый раз новый текст для задачи задавать // консоль пишет ошибку на нейм
    // spanTask.textContent = `Посмотреть новый урок по JavaScript`
    // console.log(spanTask);
    
    //button
    const buttonDelete = document.createElement('button')
    buttonDelete.className = ('task-item__delete-button default-button delete-button')
    buttonDelete.textContent = 'удалить'
    
    
    //разместить созданные объекты
    
    taskItem.insertAdjacentElement('afterbegin', taskContainer)
    
    taskContainer.insertAdjacentElement('afterbegin', taskContent)
    taskContainer.insertAdjacentElement('beforeend', buttonDelete)
    
    taskContent.insertAdjacentElement('afterbegin', formCheckbox)
    
    //form и ниже
    formCheckbox.insertAdjacentElement('afterbegin', inputCheckbox)
    formCheckbox.insertAdjacentElement('beforeend', labelTask)
    
    //span
    labelTask.insertAdjacentElement('afterend', spanTask)
    
    taskContent.insertAdjacentElement('afterbegin', formCheckbox)
    
    
    // console.log(task);
    // console.log(task.text);
    
    return taskItem // там вся стурктура хтмл лежать должна у меня в итоге и я ее создаю в функции этой..
    //передать параметр должен из рендера - таск из перебора
    
       }
    
    
       
    function renderTask () {
    
        const tasksListContainer = document.querySelector(".tasks-list");// получаю по классу элемент дом/ необязательно тут писать/ могу вынести за функцию
    
        tasks.forEach((task) => {
        const taskItem = createTaskElement(task); //пишу переменную для функции
        tasksListContainer.append(taskItem); // что писал в функц вставляю в tasksListContainer 
    
        return task // я перебором массива получаю отдельные элементы - наши задачи по одной и с ними мне надо работать!! там есть id/name и completed - его надо тоже прописать куда-то значение
        })
    
    }
    renderTask()
    
}

task3()