//Crea una variabile eta e stampa "Maggiorenne" se è >= 18, altrimenti "Minorenne".
let eta = 20;
if (eta >= 18) {
    console.log("sei maggiorenne");
} else console.log("sei minorenne");

//Crea una variabile giorno e usa switch per stampare "Weekend" se è sabato o domenica, altrimenti "Giorno lavorativo".

let giorno = "domenica";

switch(giorno) {
    case "sabato":
    console.log("weekend");
    case "domenica":
    console.log("giorno lavorativo");
    break;
}

//Usa un for per stampare tutti i numeri da 1 a 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Usa un while per stampare tutti i numeri pari da 2 a 20.

let j = 2;

while (j <= 20) {
    console.log(j);
    j += 2;
}

//Usa un do…while per chiedere all’utente di inserire un numero finché non inserisce un numero maggiore di 10 (puoi simulare con una variabile).

let numero = 0; 

do {
    console.log("Hai inserito:", numero);
    numero += 3; 
} while (numero <= 10);

console.log("Numero maggiore di 10 inserito:", numero);
