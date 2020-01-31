// Координаты палуб корабля
let location1 = Math.floor(Math.random() * 7)
let location2 = location1 + 1
let location3 = location2 + 1
console.log(location1)
// Координата выстрела
let currentShot
// Сколько сделано выстрелов
let shots = 0
// Сколько попаданий
let hits = 0
// Потоплен ли корабль?
let isSunk = false

// Цикл игры работает, пока корабль не потонул
while (isSunk === false) {
  // получаем координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9'))
  if (currentShot < 0 || currentShot > 9) {
    alert('Ошибка')
  }
  // отмечаем 1 выстрел
  shots += 1
  // проверяем попал или нет
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    hits += 1
    alert('Попадание')
  } else {
    alert('Промах')
  }
  // если не попал играем дальше
  // если попал увеличиваем hits
  // если попал 3 раза то топим корабль и сообщаем об успехе
  if (hits === 3) {
    isSunk = true
    alert('Пустой корабль утонул. Победа!')
  }
}
