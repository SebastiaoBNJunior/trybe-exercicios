// Exercicio 1 ->

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let higherN = 0;
let imp = 0;

for(let result = 0; result <10; result++){

  sum += numbers[result];
}

sum = (sum/10);

if (sum > 20){
  console.log("Valor maior que 20");
}
else{
  console.log("Valor menor ou igual a 20");
}

// Exercicio 2 ->

for(let i=0; i <numbers.length; i++){
   if (numbers[i] > higherN){
   higherN = numbers[i];}
}
console.log("O maior valor é: " + higherN);

// Exercicio 3 ->

for(let i=0; i <numbers.length; i++){
  if (numbers[i] % 2 !== 0){
     (imp++);
  }
}
if (imp === 0){
  console.log("Nenhum valor impar encontrado");
}
else{
  console.log("Existem: " + imp + " números ímpares na array");
}

// Exercicio 4 ->

for (let i=0; i < numbers.length; i++){
  if (numbers[i] <higherN){
    higherN = numbers[i];
  }
}
console.log("O menor valor é: " +higherN);

// Exercicio 5 ->

numbersX = [];
for (let i=1; i<=25; i++){
  numbersX.push(i);
}
console.log(numbersX);

// Exercicio 6 ->

for (let i=0; i<numbersX.length; i++){
console.log(numbersX[i]/2)
}

