import {ClassStack} from './modules/stack';
import {ClassQueue} from './modules/queue';
import {ClassLinkedList} from './modules/linkedList';


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
 * 队列的实例 优先队列和循环队列
 */

//优先队列
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


//循环队列

function hotPotato(nameList:string[],num:number){
    var queue = new ClassQueue();

    for(var i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i])
    }

    var eliminated = '';
    while(queue.size()>1){
        for(var i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }

        eliminated = queue.dequeue();
    }

    return queue.dequeue()
}
//javascript的任务队列，在我们打开浏览器中打开一个新标签时候，就会创建一个任务队列。这是因为每个标签都是单线程处理所有任务，它被称为事件循环
//web worker技术 在javascript主线程的控制下，帮助分担计算的任务，并没有i/o功能
//浏览器环境下js引擎的事件循环机制
//1执行栈和事件队列
//2.mascro task 和micro task （宏任务和微任务）
//属于宏任务的有 setInterval() setTimeout()
//属于微任务的有 new Promise() new MutaionObserver()
//当当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。
//https://www.cnblogs.com/mqliutie/p/4422247.html 这是讲执行栈的博客

/**
 * 链表实例
 */
class ElementofLinkedList {
    element:any;
    next:ElementofLinkedList|null = null

    constructor(element:any){
        this.element = element;
    }
}

var linkedList  = new ClassLinkedList();

linkedList.append(new ElementofLinkedList(1))
linkedList.append(new ElementofLinkedList(2))
linkedList.append(new ElementofLinkedList(3))
linkedList.append(new ElementofLinkedList(4))
linkedList.append(new ElementofLinkedList(5))

linkedList.insert(0,new ElementofLinkedList(0))
// linkedList.removeAt(0)
// console.log(linkedList.head)
// console.log(linkedList.length)
// console.log(linkedList.toString())