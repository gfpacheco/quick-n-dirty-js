// implementar duas classes, sendo que uma é herança de outra, e a classe "filha" deverá chamar um método da classe "pai"

// @gfpacheco
var Counter = function(n) {
    this.count = n || 0;
};

Counter.prototype.next = function() {
    return ++this.count;
};

var XCounter = function(x, n) {
    this.x = x;

    Counter.call(this, n);
};

XCounter.prototype.constructor = new Counter();

XCounter.prototype.xNext = function() {
    var i;

    for (i = 0; i < this.x; i++) {
        Counter.prototype.next.call(this);
    }

    return this.count;
};

var dc = new XCounter(2);
console.log(dc.xNext());
