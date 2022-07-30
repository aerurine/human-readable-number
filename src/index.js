module.exports = function toReadable (number) {
  const underTwenty = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const underHundred = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  const hundred = ['hundred']

  if (number === 0) {
    return 'zero'
  }
  if (number <= 19) {
    return result = underTwenty[number]
  }
  if ((number > 19) && (number < 100)&& (number % 10 !==0)) {
    return result = underHundred[Math.floor(number/10)] + ' ' + underTwenty[number % 10]
  }
  if ((number > 19) && (number < 100) && (number % 10 == 0)) {
    return result = underHundred[Math.floor(number/10)]
  }
  if ((number >= 100) && (number % 10 !== 0) && (number % 100 < 10)) {
    return result = underTwenty[Math.floor(number/100)] + ' ' + hundred +' ' + underTwenty[number % 10]
  }
  if ((number >= 100) && (number % 10 !== 0) && (number % 100 > 10) && (number % 100 < 20)) {
    return result = underTwenty[Math.floor(number/100)] + ' ' + hundred + ' ' + underTwenty[number % 100]
  }
  if ((number >= 100) && (number % 10 !== 0) && (number % 100 > 20)) {
    return result = underTwenty[Math.floor(number/100)] + ' ' + hundred +' ' + underHundred[Math.floor(number/10) %10] + ' ' + underTwenty[number % 10]
  }
  if ((number >= 100) && (number % 10 == 0) && (number % 100 !== 0)) {
    return result = underTwenty[Math.floor(number/100)] + ' ' + hundred +' ' + underHundred[Math.floor(number/10) %10]
  }
  if ((number >= 100) && (number % 10 == 0) && (number % 100 == 0)) {
    return result = underTwenty[Math.floor(number/100)] + ' ' + hundred
  }
}
