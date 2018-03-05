var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
var PhotoComponent = /** @class */ (function (_super) {
    __extends(PhotoComponent, _super);
    function PhotoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoComponent.prototype.onChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            _this.processFile(reader.result, file.type)
                .then(function (data) {
                _this.photoData = data.toString();
                _this.control.setValue(_this.photoData);
            });
        };
        reader.onerror = function () {
            console.log('There was an error reading the file!');
        };
        if (typeof (file) !== 'undefined') {
            reader.readAsDataURL(file);
        }
    };
    PhotoComponent.prototype.previewSrcExists = function () {
        return typeof (this.photoData) === 'string';
    };
    PhotoComponent.prototype.clearPhoto = function () {
        this.photoData = null;
        this.control.reset();
    };
    PhotoComponent.prototype.processFile = function (dataURL, fileType) {
        var maxWidth = 800;
        var maxHeight = 800;
        var image = new Image();
        image.src = dataURL;
        return new Promise(function (resolve, reject) {
            image.onload = function () {
                var width = image.width;
                var height = image.height;
                var shouldResize = (width > maxWidth) || (height > maxHeight);
                if (!shouldResize) {
                    resolve(dataURL);
                }
                var newWidth;
                var newHeight;
                if (width > height) {
                    newHeight = height * (maxWidth / width);
                    newWidth = maxWidth;
                }
                else {
                    newWidth = width * (maxHeight / height);
                    newHeight = maxHeight;
                }
                var canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                var context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, newWidth, newHeight);
                resolve(canvas.toDataURL(fileType));
            };
            image.onerror = function (err) { return reject(err); };
        });
    };
    PhotoComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists()\" class=\"clearfix\">\n      <img [attr.src]=\"photoData\" style=\"width: 200px; float: left;\" class=\"img-thumbnail\" />\n      <span href=\"#\" style=\"cursor: pointer;\" (click)=\"clearPhoto()\">\n        <i class=\"la la-close\"></i>\n      </span>\n    </div>\n    <div>\n      <input\n        *ngIf=\"!previewSrcExists()\"\n        type=\"file\"\n        (change)=\"onChange($event)\"\n      />\n      <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    PhotoComponent.ctorParameters = function () { return []; };
    return PhotoComponent;
}(CommonComponent));
export { PhotoComponent };
