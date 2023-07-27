/* const juan = {
    name: "juanito",
    age: 18,
    approvedCourses: ["Curso1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
} */

/* console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan))

Object.defineProperty(juan, "pruebaNasa", {
    value: "Extraterrestres",
    writable: true,
    enumerable: true,
    configurable: true
})  */

/* Object.defineProperty(juan, "Prueba", {
    value: "Extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
})

Object.defineProperty(juan, "Navigator", {
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
})

Object.defineProperty(juan, "Terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
})

Object.defineProperty(juan, "Editor", {
    value: "VScode",
    enumerable: true,
    writable: false,
    configurable: true,
})

Object.seal(juan)
Object.freeze(juan)

console.log(Object.getOwnPropertyDescriptors(juan))

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
}

const stringifiedComplexObj = JSON.stringify(obj1)
const Obj2 = JSON.parse(stringifiedComplexObj) */


/* const obj2 = {}

for (prop in obj1) {
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({}, obj1)
const obj4 = Object.create(obj1) */

//const numeritos = [0,1,2,3,4,5,6,7,8,9,10]

/* let numerito = 0
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index ]
    console.log({index, numerito})
} */

/* function recursividad(numbersArray) {
    if (numbersArray != 0) {
        const firstNum = numbersArray[0]
        console.log(firstNum)
        numbersArray.shift()
        recursividad(numbersArray)
    }
} */

function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy(subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  
  function SuperObject() {}
  SuperObject.isObject = function (subject) {
    return typeof subject == "object";
  }
  SuperObject.deepCopy = function (subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
  
  function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  
    const private = {
      "_learningPaths": [],
    };
  
    Object.defineProperty(this, "learningPaths", {
      get() {
        return private["_learningPaths"];
      },
      set(newLp) {
        if (newLp instanceof LearningPath) {
          private["_learningPaths"].push(newLp);
        } else {
          console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath");
        }
      },
    });
  
    for (learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex];
    }
  }
  
  const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
  const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
  const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });