exports.default = function (callback) {
    this.customProp = 'Some value';

    setTimeout(function callCallback() {
        callback(this.customProp);
    }, 10);
}
