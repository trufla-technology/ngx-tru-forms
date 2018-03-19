import { Component } from '@angular/core';
var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
    }
    CommonComponent.prototype.isRequired = function () {
        return this.control.validator !== null;
    };
    CommonComponent.prototype.title = function () {
        return typeof this.schema.title === 'undefined' ? this.strToUpperCase(this.schema.key) : this.schema.title;
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
    CommonComponent.prototype.getMask = function () {
        if (this.schema.hasOwnProperty('mask')) {
            var mask_1 = [];
            this.schema.mask.forEach(function (el) {
                mask_1.push(/^\/.*\/$/.test(el) ? new RegExp(el.replace(/^\/|\/$/g, '')) : el);
            });
            return mask_1;
        }
        return false;
    };
    CommonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jf-component',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CommonComponent.ctorParameters = function () { return []; };
    return CommonComponent;
}());
export { CommonComponent };
