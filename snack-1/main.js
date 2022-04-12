/* 
SNACK 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
    {
        varietà: 'romanesca',
        peso: 70,
        lunghezza: 25
    },
    {
        varietà: 'calabrese',
        peso: 83,
        lunghezza: 30
    },
    {
        varietà: 'napoletana',
        peso: 30,
        lunghezza: 15
    },
    {
        varietà: 'pugliese',
        peso: 100,
        lunghezza: 45
    },
    {
        varietà: 'spagnola',
        peso: 135,
        lunghezza: 50
    },
    {
        varietà: 'greca',
        peso: 40,
        lunghezza: 20
    },
    {
        varietà: 'francese',
        peso: 200,
        lunghezza: 70
    },
    {
        varietà: 'toscana',
        peso: 65,
        lunghezza: 35
    },
    {
        varietà: 'umbra',
        peso: 50,
        lunghezza: 80
    },
    {
        varietà: 'molisana',
        peso: 15,
        lunghezza: 10
    }
];

// console.log(zucchine.length);
let sum = 0;
const peso_zucchina = zucchine.forEach(zucchina => {
    const peso = zucchina.peso
    sum += peso;
});

console.log(sum);