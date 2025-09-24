//Crea una funzione saluta che stampa "Ciao!" in console e chiamala.

function saluta() {
    console.log("Ciao Biagigio");
}

//Crea una funzione salutaNome che prende un parametro nome e stampa "Ciao [nome]!".

function salutaPersona(nome) {
  console.log("Ciao " + nome + "!");
}

salutaPersona("Biagio"); // Ciao Biagio!

//Crea una funzione somma che prende due numeri e restituisce la loro somma.

function somma(a, b) {
    return a + b;
}

let risultato = somma(4, 5);
console.log(risultato); // 9

//Crea una funzione isPari che prende un numero e restituisce true se è pari, false se è dispari.

function isPari(numero) {

    return numero % 2 === 0;
}

let risultatoPari = isPari(4);
console.log(risultatoPari);

//Riscrivi la funzione somma usando arrow function e salvala in una variabile sommaFreccia.
const sommaFreccia = (a,b) => a+b;
let risultatofreccia = sommaFreccia(4,5);
console.log(risultatofreccia)