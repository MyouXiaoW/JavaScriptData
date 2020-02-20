/**
 * 数组这种数据结构，在大多数的语言中，大小是固定的，从数组的起点或者中间插入或移除项的成本很高，因为需要移动元素。
 * 链表储存有序集合，在内存中并不是连续放置的，每个元素由一个储存元素本身的节点和一个指向下一个元素的引用组成。
 * 链表的好处在于，添加或者移除元素的时候不需要移动其他元素，但是不可以直接访问任何位置的元素，需要循环整个链表。
 */

type ElementData = string |number |null|undefined;

interface LinkedList<T>{
    length:number;
    head:T | null;
    append(element:T):void //向尾部添加一个新的项
    insert(position:number,element:T):boolean; //向列表的特定位置插入一个新的项
    removeAt(position:number):ElementData; //从列表中移除一项
    remove(element:ElementData):ElementData; //返回元素在列表中的索引。如果列表中没有该元素则返回-1
    indexOf(element:ElementData):number; //从列表的特定位置移除一项
    isEmpty():boolean;
    size():number;
    getHead():T|null;
    toString():string; //由于列表项使用了node类，就需要改写原来的tostring方法
    print():void;
}

export class ElementofLinkedList {
    element:ElementData;
    next:ElementofLinkedList|null = null

    constructor(element:ElementData){
        this.element = element;
    }
}

export class ClassLinkedList<T extends ElementofLinkedList> implements LinkedList<T> {
    // node: T;    
    length: number = 0;
    head: T | null = null;
    append(element: T): void {
        //在添加元素的时候，有两种场景，列表为空，添加的是第一个元素，或者列表不为空，向其追加元素
        var current;
        if(this.head ===null){
            this.head = element;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = element;
        }
        this.length ++
    }
    insert(position: number, element: T): boolean {
        //在特定位置添加元素
       if(position >=0 && position < this.length){
           var current:T = <T>this.head,index:number=0,previous:T = <T>this.head;
           if(position ===0){
               element.next = current;
               this.head = element;
           }else{
               while(index++ < position){
                   previous = current;
                   current = <T>current.next
               }
               previous.next = element;
               element.next = current;
           }

           this.length ++

           return true;
       }else{
           return false;
       }
    }
    removeAt(position: number): ElementData {
       
        //从特定的位置移除元素
        var current:T =<T>this.head, index:number = 0,previous:T=<T>this.head;

        if(position > -1 && position<this.length){
            if(position ===0){
                this.head = <T>current.next ;
            }else{
                while(index++ < position){
                    previous = current;
                    current = <T>previous.next;
                }
                
                previous.next = <T>current.next;
            }

            this.length --
            return current.element;
        }else{
            return null
        }
    }
    remove(element: ElementData): ElementData {
        var position:number = this.indexOf(element);
        return this.removeAt(position)
    }
    getElementAt(index:number):T|undefined{
        if(index >=0 && index<this.length){
           var current:T = <T>this.head;

            for(var i:number=0;i<index && current !== null;i++){
                current = <T>current.next;
            }
            return current
        }

        return undefined;
    }
    indexOf(element: ElementData): number {
        //这是一个基础函数可以用在remove函数上
        var current:T = <T>this.head,index:number = -1;

        while(current){
            if(current.next === element){
                return index;
            }
            current = <T>current.next
            index ++ 
        }

        return -1
    }
    isEmpty(): boolean {
        return this.length ===0;
    }
    size(): number {
        return this.length;
    }
    getHead(): T |null{
        return this.head
    }
    toString(): string {
        var current:T|null = <T>this.head,string='';

        while(current){
            string += current.element +(current.next ? '\n' : '' )
            current = <T|null>current.next
        }

        return string;
    }
    print(): void {
        throw new Error("Method not implemented.");
    }


} 

//双向链表
//在单向链表中，如果迭代时错过了要找的元素，就需要回到起点，重新开始迭代。这是双向链表的一个优势。
class DoublyNode extends ElementofLinkedList{
    prev:ElementofLinkedList|null = null
    constructor(element:ElementData){
        super(element);
    }
}

/**
 * 我们可以对 insert 和 remove 这两个方法的实现做一些改进。在结果为否的情
 *况下，可以把元素插入双向链表的尾部。性能也可以有所改进，比如，如果
 *position 大于 length/2，就最好从尾部开始迭代，而不是从头开始（这样就
 *能迭代双向链表中更少的元素）。
 */
class DoublyLinkedList<T extends DoublyNode> extends ClassLinkedList<T>{
    tail:T | null = null

    insert(position:number,element:T):boolean{
        if(position >= 0 &&  position < this.length){
            var current:T = <T>this.head;
            if(position ===0){
                if(this.head ===null){
                    this.head = element;
                    this.tail = element;
                }else{
                    element.next = current;
                    current.prev = element;
                    this.head = element;
                }
            }else if(position === this.length){
                 current = <T>this.tail;
                 this.tail = element;
                 current.next = element;
                 element.prev = current;
            }else{
                var previous:T = <T>this.getElementAt(position)
                current = <T>previous.next;
                previous.next = element;
                current.prev = element;
                element.prev = previous;
                element.next = current;
            }
            this.length ++ 
            return true;
        }
        return false;
    }
    removeAt(position:number):ElementData{
        if(position>=0 && position<this.length){
            var current:T = <T>this.head;
            if(position ===0){
                this.head = <T>current.next;
                if(this.length ===1){
                    this.tail = null;
                }else{
                    this.head.prev = null;
                }
            }else if(position === (this.length -1)){
                current = this.tail as T;
                this.tail = current.prev as T;
                this.tail.next = null;
            }else{
                var previous:T = this.getElementAt(position -1) as T;
                current = previous.next as T;
                previous.next = current.next;
                current = <T>current.next;
                current.prev = previous
            }
            this.length --;
            return current.element;
        }

        return null
    }
}

//循环列表
class CircularLinkedList<T extends DoublyNode> extends DoublyLinkedList<T>{
    
}
