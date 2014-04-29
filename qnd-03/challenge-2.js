// implementar duas classes, sendo que uma é herança de outra, e a classe "filha" deverá sobreescrever um método da classe "pai"

// @gfpacheco
var Counter = function(n) {
    this.count = n || 0;
};

Counter.prototype.next = function() {
    return ++this.count;
};

var InverseCounter = function(n) {
    Counter.call(this, n);
};

InverseCounter.prototype.constructor = new Counter();

InverseCounter.prototype.next = function() {
    return --this.count;
};
