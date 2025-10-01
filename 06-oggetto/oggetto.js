//1️⃣ Cos’è un oggetto?
//Un oggetto è una collezione di coppie chiave-valore.
//Le chiavi (proprietà) sono stringhe, i valori possono essere qualsiasi tipo: numero, stringa, booleano, array, funzione…

let persona = {
    name: "Biagio",
    age: 20,
    isStudent: true,
    city: "Modugno"
}

console.log(persona.name);      // "Biagio"
console.log(persona["age"]);    // 20

//2️⃣ Aggiungere, modificare, rimuovere proprietà
persona.age = 21;        // Modifica        
persona.city = "Bari";       // aggiunge una nuova proprietà
delete persona.isStudent;      // rimuove una proprietà

//3️⃣ Oggetti con funzioni (metodi)
let calcolatrice = {
  somma: function(a, b) {
    return a + b;
  },
  moltiplica(a, b) {
    return a * b;
  }
};

console.log(calcolatrice.somma(3, 4));       
console.log(calcolatrice.moltiplica(2, 5));  