import {ClassStack} from './modules/stack';
import {ClassQueue} from './modules/queue';


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

function divide(base:number){
    return function(desNumber:number):string{
        var rem,
            binaryString ='',
            digits = '0123456789ABCDEF',
            remStack = new ClassStack();

        while(desNumber>0){
            rem = desNumber % base | 0
            remStack.push(rem)
            desNumber = desNumber / base | 0
            
        }

        while(!remStack.isEmpty()){
            binaryString += digits[remStack.pop()];
        }

        return binaryString;
    }
}

var divideBy2 = divide(2);
var divideBy8 = divide(8);
var divideBy16 = divide(16)


/**
 * 队列的实例 优先队列
 */

//react fiber 队列
class Element{
    public priority:number =0;
    public element:any;

    constructor(priority:number,element:any){
        this.priority = priority;
        this.element = element;
    }
}

class PriorityQueue<T extends Element > extends ClassQueue<T>{
    enqueue(element:T):void{
        var add:boolean = false;
        for(var i:number=0;i< this.items.length;i++){
            if(this.items[i].priority>element.priority ){
                
                this.items.splice(i,0,element)
                add = true;
                break;
            }
        }
        if(!add){
            this.items.push(element)
        }
    }
}

var priorityQueue = new PriorityQueue<Element>();

priorityQueue.enqueue(new Element(1,2) )
priorityQueue.enqueue(new Element(10,2) )
priorityQueue.enqueue(new Element(4,2) )
priorityQueue.enqueue(new Element(20,2) )
priorityQueue.enqueue(new Element(9,2) )

console.log(priorityQueue.items)


