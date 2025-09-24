//Crea un array frutti con 3 nomi di frutta e stampali tutti usando console.log.
let frutti = ["mela", "banana", "pera"];

//Aggiungi un frutto all’inizio e uno alla fine dell’array.
frutti.unshift("kiwi");
frutti.push("arancia");

//Rimuovi il primo e l’ultimo frutto dall’array.
frutti.shift();
frutti.pop();

//Usa forEach per stampare tutti gli elementi di un array numerico al quadrato.
let numeri = [1,2,3,4,5];
numeri.forEach(num => console.log(num * num))

//Crea un array [1,2,3,4,5] e: filtra i numeri > 3 moltiplica i restanti per 2 somma tutti i risultati usando reduce.
let array = [1,2,3,4,5];

let risultato = array
  .filter(num => num <= 3)      // [1,2,3] → prende solo i numeri ≤ 3
  .map(num => num * 2)          // [2,4,6] → moltiplica ciascun numero per 2
  .reduce((acc, num) => acc + num, 0); // 0+2+4+6 = 12 → somma tutti i valori
