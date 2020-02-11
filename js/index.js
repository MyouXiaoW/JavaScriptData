"use strict";
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
var stack_1 = require("./modules/stack");
var queue_1 = require("./modules/queue");
/**
 * 栈的实例 进制算法
 */
//这是一个十进制转换成二进制的函数
// function divideBy2(decNumber:number){
//     //十进制的数字和2整除（二进制就是满二进一），直到结果为0
//     var rem,binaryString='',remStack  = new ClassStack();
//     while(decNumber>0){
//         rem = decNumber %2 |0 // 向下取整
//         remStack.push(rem);
//         decNumber = decNumber/2|0; //每次都要和2整除一次，然后向下取整
//     }
//     while(!remStack.isEmpty()){
//         binaryString +=remStack.pop().toString();
//     }
//     return binaryString;
// }
//在实现二进制的之后，观察实现的代码之后，可以按照这个算法完成其他进制的转化
//二进制的余数是0或者1
//8进制的余数是0-7
//16进制的余数是0-9 A-F
function divide(base) {
    return function (desNumber) {
        var rem, binaryString = '', digits = '0123456789ABCDEF', remStack = new stack_1.ClassStack();
        while (desNumber > 0) {
            rem = desNumber % base | 0;
            remStack.push(rem);
            desNumber = desNumber / base | 0;
        }
        while (!remStack.isEmpty()) {
            binaryString += digits[remStack.pop()];
        }
        return binaryString;
    };
}
var divideBy2 = divide(2);
var divideBy8 = divide(8);
var divideBy16 = divide(16);
/**
 * 队列的实例 优先队列
 */
//react fiber 队列
var Element = /** @class */ (function () {
    function Element(priority, element) {
        this.priority = 0;
        this.priority = priority;
        this.element = element;
    }
    return Element;
}());
var PriorityQueue = /** @class */ (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriorityQueue.prototype.enqueue = function (element) {
        var add = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > element.priority) {
                this.items.splice(i, 0, element);
                add = true;
                break;
            }
        }
        if (!add) {
            this.items.push(element);
        }
    };
    return PriorityQueue;
}(queue_1.ClassQueue));
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue(new Element(1, 2));
priorityQueue.enqueue(new Element(10, 2));
priorityQueue.enqueue(new Element(4, 2));
priorityQueue.enqueue(new Element(20, 2));
priorityQueue.enqueue(new Element(9, 2));
console.log(priorityQueue.items);
