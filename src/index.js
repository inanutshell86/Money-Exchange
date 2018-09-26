// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  const coins = {};
  if (currency > 10000) {
    coins.error =
      "You are rich, my friend! We don't have so much coins for exchange";
  }
  if (currency <= 10000 && currency >= 50) {
    coins.H = Math.floor(currency / 50);
    currency %= 50;
  }
  if (currency < 50 && currency >= 25) {
    coins.Q = Math.floor(currency / 25);
    currency %= 25;
  }
  if (currency < 25 && currency >= 10) {
    coins.D = Math.floor(currency / 10);
    currency %= 10;
  }
  if (currency < 10 && currency >= 5) {
    coins.N = Math.floor(currency / 5);
    currency %= 5;
  }
  if (currency < 5 && currency > 0) {
    coins.P = currency;
  }
  return coins;
};
