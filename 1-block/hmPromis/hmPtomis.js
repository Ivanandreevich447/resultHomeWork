/* задача 1.1 */
function task1 () {


    const listUsers = 'https://jsonplaceholder.typicode.com/users'  

    const dataContainer = document.querySelector('#data-container')
    
    function createListElement (text) {
        const listElement = document.createElement('li')
        const listElementA = document.createElement('a')
        listElementA.href = '#'
        listElementA.textContent = text
        listElement.append(listElementA)
    
        return listElement
    } 
    
    const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
    if(isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
    }
    
    
    
    
    
    
    const getAllUsers =() => {
        toggleLoader()
    
        const result = fetch(listUsers, {
            method: 'GET'
                })
                console.log(result);
                
                result
                .then((response) => {
            if(!response.ok) {
                throw new Error ('ошибка с запросом возникла- включи ВПН попробуй')
            } 
            return response.json() //декодер формата
                })
                // console.log(users);
                .then((users) => {
                    users.forEach(user => {
                        const userHTML = createListElement(user.username)
            dataContainer.append(userHTML)
    
                    })
                    console.log(users);
                })
                
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
        toggleLoader()
            
                })
    }
    getAllUsers()
}
// task1()



/* задача 1.2 */
function task2 () {
    const listUsers = 'https://jsonplaceholder.typicode.com/users'  

    const usersId = [5, 6, 2, 1, 9]

    const dataContainer = document.querySelector('#data-container')
    
    function createListElement (text) {
        const listElement = document.createElement('li')
        const listElementA = document.createElement('a')
        listElementA.href = '#'
        listElementA.textContent = text
        listElement.append(listElementA)
    
        return listElement
    } 
    
    const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
    if(isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
    }
    

function getUsersByIds(ids) {

const requests = ids.map((id) => fetch(`${listUsers}/${id}`))
toggleLoader()

Promise.all(requests)
.then((responses) => {
        console.log(responses);//там массив задекодирован-надо извлечь
const resultListUsers = responses.map((respons) => respons.json())
return Promise.all(resultListUsers)
    })
    .then((users) => {
        users.forEach(user => {
const userHTML = createListElement(user.name) //каждый юсер по шаблону будет по name положен сейчас в хтмл
console.log(user);
dataContainer.append(userHTML)
        })
     
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        toggleLoader()
                    
                })

}
getUsersByIds(usersId)

}

// task2()



/* задача 1.3 */


    const urlPhoto = 'https://api.slingacademy.com/v1/sample-data/photos'

    
console.log(urlPhoto);

    const userIds = [60,12, 55]

    const createElementPhoto =  (text)=> {
        const listElement = document.createElement('li')
        listElement.classList = 'photo-item'
        
        const elementImg = document.createElement('img')
        elementImg.classList = 'photo-item__image'
        elementImg.src = ''
        listElement.append(elementImg)
        
        const elementH3 = document.createElement('h3')
        elementH3.classList = 'photo-item__title'
        elementH3.textContent = ''
        listElement.append(elementH3)
        
        return listElement
        }
        
        const toggleLoader = () => {
        const louder = document.querySelector('#loader')
        const isLouder = louder.hasAttribute('hidden')
        if(isLouder) {
            louder.removeAttribute('hidden')
        } else {
            louder.setAttribute('hidden', '')
        
        } 
        }


    const dataContainer = document.querySelector('#data-container')


function getFastestLoadedPhoto(ids) {


const requests = ids.map(id => fetch(`${urlPhoto}/${id}`) )

Promise.race(requests)
    .then((responses) => {
console.log(responses); //тут получает разные юрл для фото- видимо какое быстрее отобразится- то и выдает ссылку
    if(!responses.ok) {
    console.log('ошибка чтения');
} 
    else {
        // const dataResult = responses.map((response) => response.json() )
        // console.log(dataResult);
        // return Promise.race(dataResult)

return responses.json() // мап -ошибка(тут нужен метод какой-то??) - так выводит
}
    })
    .then((photos) => { // мне тут надо уже как-то вытянуть ссылку из прошлого then? и с ним работать??

        //тут у меня выше нет массива с чем-то и перебор не надо походу?
        console.log(photos.photo.title);//там есть тайтл 
        console.log(photos)
        console.log(photos.photo.url) //ссылка на фото

        const elementH3HTML = `${photos.photo.title}`
        dataContainer.append(elementH3HTML)//не знаю как добавить в h3...
        


    })
   
        

}
getFastestLoadedPhoto(userIds)







// const photoUrl = 'https://jsonplaceholder.typicode.com/users' 

// const userIds = [60,12, 55]

// const dataContainer = document.querySelector('#data-container')


// const createElementPhoto =  (text)=> {
//     const listElement = document.createElement('li')
//     listElement.classList = 'photo-item'
    
//     const elementImg = document.createElement('img')
//     elementImg.classList = 'photo-item__image'
//     elementImg.src = ''
//     listElement.append(elementImg)
    
//     const elementH = document.createElement('h3')
//     elementH.classList = 'photo-item__title'
//     elementH.textContent = 'accusamus beatae ad facilis cum similique qui sunt'
//     listElement.append(elementH)
    
//     return listElement
//     }

//     const toggleLoader = () => {
//         const louder = document.createElement('#loader')
//         const isLouder = louder.hasAttribute(hidden)
//         if(isLouder) {
//             louder.removeAttribute(hidden)
//         } else {
//             louder.setAttribute(hidden, '')
        
//         } 
//         }



// function getFastestLoadedPhoto (ids) {
// // const res = fetch(photoUrl)

// const requests = ids.map((id) => fetch(`${listUsers}/${id}`))

// Promise.all(requests)
//     .then((responses) => {
//         console.log(responses);
//     })

// }

// getFastestLoadedPhoto()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((responses) =>{
//     console.log(responses);
//     return responses.json()
// })
// .then ((phptos) => {
//     console.log(photo);
//     const photoId = phptos.forEach((photo) => {
//         return photo
//     })
// })