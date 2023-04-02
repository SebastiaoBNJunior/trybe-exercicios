let a = 10;
let b = 10;
let c = 10; 

if (a > b && a > c){
    console.log(`O número: ${a} é maior do que o ${b} e ${c}`);
} 
else if (b > a && b > c){
    console.log(`O número: ${b} é maior do que o ${a} e ${c}`);
}
else if (c > a && c > b){
    console.log(`O número: ${c} é maior do que o ${a} e ${b}`);
}
else {
    console.log("Todos os números são iguais");
}