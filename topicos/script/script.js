console.log("------Ejercicio 1------")
const arrNum = [10,2,3,4,5,19,21,12]

let newArr = arrNum.filter(numero => numero >= 5);
newArr.forEach(element => console.log(element));

console.log("------Ejercicio 2------")
const arrFruta = ["naranja", "platano", "manzana", "fresa", "kiwi"]

const arrNew = arrFruta.slice(2,4)

console.log(newArr);

console.log("------Ejercicio 3------")
const numeros = [1,2,3,4,5,6]

const numAumentado = numeros.map((num, indice) => console.log(num + 10, indice));

console.log("------Ejercicio 4------")
const arr = ['H', 'I', 'J'];
const arr2 = ['K', 'L', 'M'];

console.log(arr.concat(arr2));

console.log("------Ejercicio 5------")
const arrPaises = ["Mexico", "USA", "Francia"]

console.log(arrPaises.includes("Francia"));