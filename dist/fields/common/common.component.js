var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
    }
    CommonComponent.prototype.isRequired = function () {
        return this.control.validator !== null;
    };
    CommonComponent.prototype.title = function () {
        return this.strToUpperCase(typeof this.schema.title === 'undefined' ? this.schema.key : this.schema.title);
    };
    CommonComponent.prototype.strToUpperCase = function (str) {
        return str.toLowerCase().replace(/_/g, ' ').split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    };
    CommonComponent.prototype.placeholder = function () {
        return this.schema.title || this.strToUpperCase(this.schema.key);
    };
    CommonComponent.prototype.type = function () {
        var format = this.schema.format || 'text';
        switch (format) {
            case 'photo':
                format = 'file';
        }
        return format;
    };
    CommonComponent.prototype.id = function (i) {
        return this.schema.key + '_' +
            (i ? this.schema.enum[i].toString().replace(/\W+/g, '') : '');
    };
    CommonComponent.prototype.getClass = function (defaultClass) {
        return this.style.hasOwnProperty('default') ?
            this.style['default'] : (defaultClass || '');
    };
    return CommonComponent;
}());
export { CommonComponent };
