/* 
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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
        lunghezza: 12
    },
    {
        varietà: 'francese',
        peso: 200,
        lunghezza: 70
    },
    {
        varietà: 'toscana',
        peso: 65,
        lunghezza: 8
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

const under_15 = zucchine.filter(zucchina => {
    return zucchina.lunghezza < 15;
})

// console.log(under_15);

const over_15 = zucchine.filter(zucchina => {
    return zucchina.lunghezza > 15
})

let sum_over_15 = 0;
const peso_zucchina_over_15 = over_15.forEach(zucchina => {
    const peso = zucchina.peso
    sum_over_15 += peso;
});

let sum_under_15 = 0;
const peso_zucchina = under_15.forEach(zucchina => {
    const peso = zucchina.peso
    sum_under_15 += peso;
});

console.log(sum_over_15);
console.log(sum_under_15);