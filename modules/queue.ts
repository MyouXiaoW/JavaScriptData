import { ClassStack } from './stack';
/**
 * 队列遵循先进先出的原则（FIFO first in first out 也称先来先服务）
 * 队列在尾部添加元素，并从顶部一处元素，最新添加的元素必须排在队列的末尾
 * 
 */

 interface Queue<T = any> {
     items:T[];
     enqueue(element:any):void;//向队列的尾部添加一个或者多个新选项
     dequeue():T; //移除队列的第一项，并返回被移除的元素
     front():T;//返回队列中第一个元素 与stack中的peek方法很相似
     isEmpty():boolean;
     size():number;
 }

export class ClassQueue<T =any> implements Queue<T>{
    items: any[]=[];    
    enqueue(element: T): void {
        this.items.push(element)
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }
    isEmpty(): boolean {
        return this.items.length ===0
    }
    size(): number {
        return this.items.length
    }
}