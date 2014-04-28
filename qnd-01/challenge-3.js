try {
    JSON.parse('Throw some error');
} catch (e) {
    var x = "It doesn't introduce a new scope, but";
}

console.log(x);
console.log(typeof e); // pq essa porra não existe?

// @gfpacheco
// It doesn't introduce a new scope, but the variable e only exists inside catch block.
