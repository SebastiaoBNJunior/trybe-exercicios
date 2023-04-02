let angleA = 65;
let angleB = 100; 
let angleC = 12;

let sumofAngles = angleA + angleB + angleC;
let allAnglesPositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesPositive){
   if (sumofAngles === 180){
    console.log(true);
   }
   else {
    console.log(false);
   };
}
else{
    console.log('Erro! Angulo inválido!');
}