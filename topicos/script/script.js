console.log("------Ejercicio 1------")
const arrNum = [10,2,3,4,5,19,21,12]

for (let i=0; i<arrNum.length;i++){
    console.log(arrNum[i]);
}

let newArr = arrNum.filter(numero => numero >= 5);
console.log("-------Nuevo array------")
newArr.forEach(element => console.log(element));

console.log("------Ejercicio 2------")
const arrFruta = ["naranja", "platano", "manzana", "fresa", "kiwi"]

const arrNew = arrFruta.slice(2,4)

console.log(newArr);

console.log("------Ejercicio 3------")
const Numeros = [1,2,3,4,5,6]

const numAumentado = Numeros.map(function(num, indice){
    console.log(num + 10, indice)
});

console.log("------Ejercicio 4------")
const arr = ['H', 'I', 'J'];
const arr2 = ['K', 'L', 'M'];

console.log(arr.concat(arr2));

console.log("------Ejercicio 5------")
const arrPaises = ["Mexico", "USA", "Francia"]

console.log(arrPaises.includes("Francia"));