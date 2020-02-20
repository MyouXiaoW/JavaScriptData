"use strict";
/**
 * 数组这种数据结构，在大多数的语言中，大小是固定的，从数组的起点或者中间插入或移除项的成本很高，因为需要移动元素。
 * 链表储存有序集合，在内存中并不是连续放置的，每个元素由一个储存元素本身的节点和一个指向下一个元素的引用组成。
 * 链表的好处在于，添加或者移除元素的时候不需要移动其他元素，但是不可以直接访问任何位置的元素，需要循环整个链表。
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    ClassLinkedList.prototype.getElementAt = function (index) {
        if (index >= 0 && index < this.length) {
            var current = this.head;
            for (var i = 0; i < index && current !== null; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
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
//双向链表
//在单向链表中，如果迭代时错过了要找的元素，就需要回到起点，重新开始迭代。这是双向链表的一个优势。
var DoublyNode = /** @class */ (function (_super) {
    __extends(DoublyNode, _super);
    function DoublyNode(element) {
        var _this = _super.call(this, element) || this;
        _this.prev = null;
        return _this;
    }
    return DoublyNode;
}(ElementofLinkedList));
/**
 * 我们可以对 insert 和 remove 这两个方法的实现做一些改进。在结果为否的情
 *况下，可以把元素插入双向链表的尾部。性能也可以有所改进，比如，如果
 *position 大于 length/2，就最好从尾部开始迭代，而不是从头开始（这样就
 *能迭代双向链表中更少的元素）。
 */
var DoublyLinkedList = /** @class */ (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tail = null;
        return _this;
    }
    DoublyLinkedList.prototype.insert = function (position, element) {
        if (position >= 0 && position < this.length) {
            var current = this.head;
            if (position === 0) {
                if (this.head === null) {
                    this.head = element;
                    this.tail = element;
                }
                else {
                    element.next = current;
                    current.prev = element;
                    this.head = element;
                }
            }
            else if (position === this.length) {
                current = this.tail;
                this.tail = element;
                current.next = element;
                element.prev = current;
            }
            else {
                var previous = this.getElementAt(position);
                current = previous.next;
                previous.next = element;
                current.prev = element;
                element.prev = previous;
                element.next = current;
            }
            this.length++;
            return true;
        }
        return false;
    };
    DoublyLinkedList.prototype.removeAt = function (position) {
        if (position >= 0 && position < this.length) {
            var current = this.head;
            if (position === 0) {
                this.head = current.next;
                if (this.length === 1) {
                    this.tail = null;
                }
                else {
                    this.head.prev = null;
                }
            }
            else if (position === (this.length - 1)) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            }
            else {
                var previous = this.getElementAt(position - 1);
                current = previous.next;
                previous.next = current.next;
                current = current.next;
                current.prev = previous;
            }
            this.length--;
            return current.element;
        }
        return null;
    };
    return DoublyLinkedList;
}(ClassLinkedList));
//循环列表
var CircularLinkedList = /** @class */ (function (_super) {
    __extends(CircularLinkedList, _super);
    function CircularLinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CircularLinkedList;
}(DoublyLinkedList));
