/*12.1*/
function task1() {
    const student = {
        stack: ["html"],
        level: 1,
        improveLevel() {
          //  for (let i = 1; i <= 6; i++)// фигня- по заданию вызывают функц несколько раз
          this.level += 1; //+1 к лвл
      
          if (this.level === 2) {
            return this.stack.push("css"); //добавляем в массив стэка элемент
          }
          if (this.level === 3) {
            return this.stack.push("JavaScript");
          }
          if (this.level === 4) {
            return this.stack.push("React");
          }
          if (this.level === 5) {
            return this.stack.push("NodeJs");
          } else if (this.level > 5) {// если больше 5 ,то все выучил и конец
            console.log(`Студент выучил все технологии!`);
          }
          return this;// как вывести студента не понимаю
        },
      };
      

      student.improveLevel();
      student.improveLevel();
      student.improveLevel();
      student.improveLevel(this.level);
      student.improveLevel(this.level);
      console.log(student);
      console.log(student.stack);
}
// task1()


/*12.2*/

function task2() {
  const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
      return "Гав-Гав";
    },
  };

  const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
      return "Чик-чирик";
    },
  };

  function makeDomestic(isDomestic = "") {
    (this.isDomestic = isDomestic),
      console.log(
        `${this.type} по имени ${this.name} гоорит ${this.makeSound()}`
      );
    return this;
  }

  makeDomestic.call(bird, false);
  console.log(bird);

  makeDomestic.apply(bird, [false]);
  console.log(bird);

  const infoDog = makeDomestic.bind(dog, true); //не забывать, что bind вызыавется как функция()
  console.log(infoDog());
}
// task2()



/*12.3*/

function task3 () {
    const footballer = {
        fullName: 'Cristiano Ronaldo',
        attack() { //убрал стрелочную функ для вызова функции через this
           console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
        },
        scoreGoal(sound) {
           console.log(`${this.fullName} забил гол! Вот это да!`);
           this.celebrate(sound);
        },
        celebrate(sound) {
           console.log(sound);
        },
        goToSubstitution(newPlayer) { //там было в значении - функция/ поправил
           console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
        }
     };
    
    
    const attack = footballer.attack.bind(footballer)
    attack()
    const score = footballer.scoreGoal.call(footballer, 'Сиииии')
    footballer.goToSubstitution.apply(footballer, ['Paulo Dibala'])
    
    //в call и apply убрал переменные и параметры поместил сразу в методы/ для bind - оставил вызов фукц отдельно тк так и нужно
}
// task3()


/*13.1*/

function task4 () {
    class Student {
        constructor(name, age) {
            this.name = name,
            this.age = age,
            this.technologies = [],
            this.status = 'Junior'
        }
        setTechnologies(technologies) {
            this.technologies = [
                ...this.technologies,
                ...technologies,
              ];
        }
        setNewStatus(newStatus) {
            this.status = newStatus;
        }
    }
    
    const newStudent = new Student('Ivan', 29)  //задал имя объекту
    newStudent.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]) //добавил параметры и их занесли через спред в массив
    newStudent.setNewStatus('Midle') // задал новое значение статуса 
    console.log(newStudent); // получил новый измененный объект через класс(вызов и добавление через НОВОЕ НАЗВАНИЕ ОБЪЕКТА, А НЕ из имя класса)
}

// task4()


/*13.2*/

function task5 () {
    class Person {
        constructor(name, age) {
                 this.name = name,
                 this.age = age
         }
         compareAge(newPerson) {
            if (this.age > newPerson.age) {
             console.log(`${this.name} старше, чем ${newPerson.name}`)
            } else {
             console.log(`${this.name} млaдше, чем ${newPerson.name}`)
            } 
         } }
         
     
     
     const person1 = new Person('Максим', 24);
     const person2 = new Person('Светлана', 36);
     const person3 = new Person('Ирина', 23);
     // console.log(person2.name);
     
     person1.compareAge(person2); // Максим младше, чем Светлана 
     person2.compareAge(person3); // Светлана старше, чем Ирина 
     person3.compareAge(person1); // Ирина младше, чем Максим
     person2.compareAge(person1); 
}

// task5()


/*13.3*/
