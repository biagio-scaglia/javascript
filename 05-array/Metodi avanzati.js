let numeri = [1, 2, 3, 4, 5];

// Iterare
numeri.forEach(n => console.log(n));

// Trasformare
let doppi = numeri.map(n => n * 2);
console.log(doppi); // [2,4,6,8,10]

// Filtrare
let grandi = numeri.filter(n => n > 3);
console.log(grandi); // [4,5]

// Ridurre
let somma = numeri.reduce((acc, n) => acc + n, 0);
console.log(somma); // 15

// Cercare
console.log(numeri.includes(3)); // true
