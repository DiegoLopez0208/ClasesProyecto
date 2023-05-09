
const multipleOfThree = number =>{

let res = 0
let digits = Array.from(number.toString(), Number); 
for (i=0;i<digits.length;i++){
    res += digits[i];
}
console.log(res);
while (res >= 0) {
  
  if (res == 3)
  {
    return "Es multiplo de 3"
  }
  res = res -3;
}
return "No es multiplo de 3"
}

console.log (multipleOfThree ("1234"))
console.log (multipleOfThree ("339"))
console.log (multipleOfThree ("15"))
console.log (multipleOfThree("5"))
console.log (multipleOfThree("7"))
