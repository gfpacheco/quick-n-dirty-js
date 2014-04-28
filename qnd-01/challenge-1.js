var count = 4;
function foo() {
    var table = [count];

    /* Constrói a tabela. */
    while (count-- > 0) {
        table.push([]);
    }

    /* Atocha números. */
    for (var count = 1; count < table.length; count++) {
        table[count].push(count);
    }
    return table;
}

foo(); // Qual o retorno?

// @gfpacheco
// [undefined]
// Because it's re-declaring the count variable inside foo.
// The count variable is still undefined while creating the table and the while loop.
