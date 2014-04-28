var foo = function() {
    if (true) {
        function bar () {
            console.log("true");
        }
    } else {
        function bar () {
            console.log("false");
        }
    }

    return bar;
};

var fn = foo();
fn(); // wtf?!

// @gfpacheco
// Functions are defined at parse-time, in this case both declarations are always parsed and the second overrides the first one.
