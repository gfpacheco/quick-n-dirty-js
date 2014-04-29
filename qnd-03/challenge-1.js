// implementar uma "classe" com atributos/métodos privados

// @gfpacheco
var Counter = function() {
    this.count = 0;
};

Counter.prototype.next = function() {
    return ++this.count;
};
