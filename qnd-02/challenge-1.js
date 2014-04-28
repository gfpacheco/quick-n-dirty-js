var potencia;

// @gfpacheco
potencia = function(e) {
    return function(n) {
        var r = n,
            i;

        for (i = 1; i < e; i++) {
            r *= n;
        }

        return r;
    };
};
//

var quadrado = potencia(2);

console.log(quadrado(2)); // 4
console.log(quadrado(3)); // 9
console.log(quadrado(4)); // 16

var cubo = potencia(3);

console.log(cubo(2)); // 8
console.log(cubo(3)); // 27
console.log(cubo(4)); // 64

// implementar a função potência usando closure.
