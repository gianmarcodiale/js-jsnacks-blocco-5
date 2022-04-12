/* 
SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
const new_array = [];

function merge_arrays(array1, array2) {

    if (array1.length === array2.length) {

        array1.forEach((element, index) => {

            new_array.push(element);
            new_array.push(array2[index])

        })

        return new_array;
    }

}

console.log(merge_arrays(letters, numbers));

