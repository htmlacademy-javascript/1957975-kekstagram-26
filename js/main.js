/*
Информация взята  с сайта  MDN Web Docs
Метод Math.() - округление вверх.
Метод Math.floor() - округление вниз.
 */
// первая  функциярандомных чисел
function getRandomInteger(min, max) {
  if (min < 0) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}
getRandomInteger(1, 400);

// функция подсчета символов в комментарии
function checkLength(str, length) {
  return str.length <= length;
}
checkLength('Длинна комментария не должны быть больше 140 симовлов', 140);
