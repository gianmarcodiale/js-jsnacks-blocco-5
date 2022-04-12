/* 
SNACK 3 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

/**
 * 
 * @param  {...string} word inserire la stringa da rovesciare
 * @return {string} restituisce la parola rovesciata
 */
function reverse_word(...word) {
    // console.log(word);
    return word.reverse().join('');
}

console.log(reverse_word(...'Serpente'));