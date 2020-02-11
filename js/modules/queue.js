"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassQueue = /** @class */ (function () {
    function ClassQueue() {
        this.items = [];
    }
    ClassQueue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    ClassQueue.prototype.dequeue = function () {
        return this.items.shift();
    };
    ClassQueue.prototype.front = function () {
        return this.items[0];
    };
    ClassQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    ClassQueue.prototype.size = function () {
        return this.items.length;
    };
    return ClassQueue;
}());
exports.ClassQueue = ClassQueue;
