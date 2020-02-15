function sayHelloToConsole() {
  console.log("Hello!");
}
sayHelloToConsole()

function sayHello(name = "stranger") {
  // if (name === undefined) {
  //   name = "Stranger"
  // }
  // name = name || "stanger"
  alert("Hello " + name + "!")
}

// sayHello()
let adminName = "Innokentiy"
function logUser() {
  let userName = "Ivan Ivanich"
  console.log(userName)
  console.log(adminName)
}
logUser()
// console.log(userName)
console.log(adminName)

function getName() {
  let myName = "Lily"
  return myName
}

let user = getName()
console.log(user)

function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log("Варю " + cups + " кофе с молоком")
  }
  return console.log("Варю " + cups + " кофе без добавок")
}

makeCoffee(24, false)
makeCoffee(3, true)
makeCoffee(8)

// function findMax(a, b) {
//   if (a > b) {
//     return(a)
//   } else if (a < b) {
//     return(b)
//   } else if (a === b) {
//     alert("Числа равны")
//   }
// }
//
// findMax(6, 5)

function addOne(a) {
  return a + 1
}

let number = addOne(7)
console.log(number)

function showQuote(text, author) {
  if (text && author) {
    return(text + author)
  } else if (text) {
    return(text + " Неизвестный автор")
  } else {
    return
  }
}

console.log(showQuote("цитата", "автор"))
console.log(showQuote("цитата"))
console.log(showQuote())

function nextEven(num) {
  if (num % 2 === 0) {
    return num + 2
  }
  return num + 1
}

console.log("Вызываю функцию nextEven(11) и получаю результат: " + nextEven(11))
console.log("Вызываю функцию nextEven(46) и получаю результат: " + nextEven(46))
