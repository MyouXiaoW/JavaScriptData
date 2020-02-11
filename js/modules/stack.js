"use strict";
/**
 * 栈是一种类似于数组的数据结构，在添加和删除数组的时候更加可控。
 * 栈遵循的原则是后进先出原则（LIFO）的有序集合。
 * 新添加和待删除的元素都保存在同一端，叫栈顶，另一段叫栈底。
 * 新元素都靠近栈顶，旧元素都接近栈底。
 *
 * 主要实现的功能：
 * 向栈中添加元素
 * 从栈中删除元素
 * 查看栈顶元素
 * 查看栈是否为空
 * 清空和打印栈元素
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClassStack = /** @class */ (function () {
    function ClassStack() {
        this.items = [];
    }
    ClassStack.prototype.push = function (element) {
        this.items.push(element);
    };
    ClassStack.prototype.pop = function () {
        return this.items.pop();
    };
    ClassStack.prototype.peek = function () {
        var length = this.items.length;
        return this.items[length - 1];
    };
    ClassStack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    ClassStack.prototype.clear = function () {
        this.items.length = 0;
    };
    ClassStack.prototype.size = function () {
        return this.items.length;
    };
    return ClassStack;
}());
exports.ClassStack = ClassStack;
