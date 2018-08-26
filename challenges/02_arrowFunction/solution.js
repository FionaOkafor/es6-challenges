exports.default = function (callback) {
    this.customProp = 'Some value';

    setTimeout(() => {
        callback(this.customProp);
    }, 10);
}
