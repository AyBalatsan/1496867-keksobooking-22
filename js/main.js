let getRandom = function getRandomInRange(min, max, digitNumber) {
  digitNumber = Math.pow(10, digitNumber);
  if(min>max){
    return 'Функция не доступна, так как min>max. Задайте корректные значения'
  }
  if(min<0 || max<0){
    return 'Функция не доступна, так как min или max не могут быть отрицательными. Задайте корректные значения'
  }
  return Math.floor((Math.floor(Math.random() * (max - min + 1)) + min) * digitNumber)/digitNumber;
}
alert(getRandom(-11, 14, 4));
