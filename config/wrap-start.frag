(function (root, factory) {
    if (typeof Livefyre === 'object' && typeof Livefyre.define === 'function' && Livefyre.define.amd) {
        // Livefyre.define is defined by https://github.com/Livefyre/require
        Livefyre.define([], factory);

    } else if (typeof Livefyre !== 'object' && typeof root['define'] === 'function' && root['define'].amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        root['define']([], factory);

    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        var f = factory();
        root.Livefyre = root.Livefyre || {};

        for (var module in f) {
            if (f.hasOwnProperty(module)) {
                root.Livefyre[module] = f[module];
            }
        }
    }
}(this, function () {
    //almond, and your modules will be inlined here
