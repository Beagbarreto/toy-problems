
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var digitValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
//romanNumeral is string, split in order to be able to compare values
//iterate through digit Values to get value of string
//translate roman numeral into ordinal number
//if value of rn is smaller than another should substract
//if rn value is sm
//iterate through object to see values
//add values up to give number
//use recursive to loop through array and compare with digitValues object
//recursive stops when it iterates through all array
var letters = romanNumeral.split("");

for(var key in digitValues){
  for(var i = 0; i < digitValues[key].length; i++){
    if(letters === digitValues[key]){
      return digitValues[key][i];

    }
  }
}
  for(var x in letters){

  }
};
