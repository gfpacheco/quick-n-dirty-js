// implementar usando module-pattern e as funções do challenge-1, um módulo que
// contenha a api "quadrado" e "cubo" públicas, valendo!

var module; // implementar essa bosta

// @gfpacheco
module = (function() {
    var potencia = function(e) {
        return function(n) {
            var r = n,
                i;

            for (i = 1; i < e; i++) {
                r *= n;
            }

            return r;
        };
    };

    return {
        quadrado: potencia(2),
        cubo: potencia(3)
    };
})();
//

console.log(module.quadrado(2)); // 4
console.log(module.quadrado(3)); // 9
console.log(module.quadrado(4)); // 16

console.log(module.cubo(2)); // 8
console.log(module.cubo(3)); // 27
console.log(module.cubo(4)); // 64
