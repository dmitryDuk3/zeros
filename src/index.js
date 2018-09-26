module.exports = function getZerosCount(number) {
  let amount = 0;// your implementation
  while(number > 5) {
    amount += parseInt(number / 5);
    number = number / 5;
  }
  return amount;
}