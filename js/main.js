/*
Информация взята  с сайта  MDN Web Docs
Метод Math.() - округление вверх.
Метод Math.floor() - округление вниз.
 */
// первая  функциярандомных чисел
function getRandomInteger(min, max) {
  if (min < 0) {
    console.log('введите  занчение больше или равное 0');
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomInteger(10, 12);

// вторая функция рандомных чисел
let number = Math.ceil(Math.random() * -100);
if (number < 0) {
 console.log(false);
}
console.log(number);

// функция подсчета символов в комментарии
const string = 'Длинна комментария не должны быть больше 140 симовлов';
if (string.length > 140) {
  console.log(false);
} else {
  console.log(true);
}


