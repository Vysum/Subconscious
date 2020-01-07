String.prototype.format = function() {
    let a = arguments;
    return this.replace(/{(\d+)}/g, function(m, n) {
        return typeof a[n] != 'undefined' ? a[n] : m;
    })
}

Number.prototype.toReadable = function() {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

Object.prototype.length = function() {
    return this.keys().length;
}