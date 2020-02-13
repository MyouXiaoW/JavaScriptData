"use strict";
/**
 * 数组这种数据结构，在大多数的语言中，大小是固定的，从数组的起点或者中间插入或移除项的成本很高，因为需要移动元素。
 * 链表储存有序集合，在内存中并不是连续放置的，每个元素由一个储存元素本身的节点和一个指向下一个元素的引用组成。
 * 链表的好处在于，添加或者移除元素的时候不需要移动其他元素，但是不可以直接访问任何位置的元素，需要循环整个链表。
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ElementofLinkedList = /** @class */ (function () {
    function ElementofLinkedList(element) {
        this.next = null;
        this.element = element;
    }
    return ElementofLinkedList;
}());
exports.ElementofLinkedList = ElementofLinkedList;
var ClassLinkedList = /** @class */ (function () {
    function ClassLinkedList() {
        // node: T;    
        this.length = 0;
        this.head = null;
    }
    ClassLinkedList.prototype.append = function (element) {
        //在添加元素的时候，有两种场景，列表为空，添加的是第一个元素，或者列表不为空，向其追加元素
        var current;
        if (this.head === null) {
            this.head = element;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = element;
        }
        this.length++;
    };
    ClassLinkedList.prototype.insert = function (position, element) {
        //在特定位置添加元素
        if (position >= 0 && position < this.length) {
            var current = this.head, index = 0, previous = this.head;
            if (position === 0) {
                element.next = current;
                this.head = element;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = element;
                element.next = current;
            }
            this.length++;
            return true;
        }
        else {
            return false;
        }
    };
    ClassLinkedList.prototype.removeAt = function (position) {
        //从特定的位置移除元素
        var current = this.head, index = 0, previous = this.head;
        if (position > -1 && position < this.length) {
            if (position === 0) {
                this.head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = previous.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
        else {
            return null;
        }
    };
    ClassLinkedList.prototype.remove = function (element) {
        var position = this.indexOf(element);
        return this.removeAt(position);
    };
    ClassLinkedList.prototype.indexOf = function (element) {
        //这是一个基础函数可以用在remove函数上
        var current = this.head, index = -1;
        while (current) {
            if (current.next === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    };
    ClassLinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    ClassLinkedList.prototype.size = function () {
        return this.length;
    };
    ClassLinkedList.prototype.getHead = function () {
        return this.head;
    };
    ClassLinkedList.prototype.toString = function () {
        var current = this.head, string = '';
        while (current) {
            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }
        return string;
    };
    ClassLinkedList.prototype.print = function () {
        throw new Error("Method not implemented.");
    };
    return ClassLinkedList;
}());
exports.ClassLinkedList = ClassLinkedList;
