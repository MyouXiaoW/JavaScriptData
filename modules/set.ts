/**
 * 集合，是一种不允许值重复的顺序数据结构
 * 我们将学到并集，交集，差集等数学运算
 *
 * 集合以[值，值]的形式存储元素
 * 
 * 在数学中，集合就是一组不同对象的集 
 * 自然数集合 N={0,1,2,3,4,5,6,...}
 * 还有一个概念是空集，空集就是不包含任何元素的集合，
 * 比如说 24-29之间的素数集合（素数就是除了1和自身外没有其他的正因数且大于一的自然数），用{}表示
 */

type setElement = any;
interface setItems<T>  {
    [index: number]: T;
};

interface Set{
    add(element:setElement):boolean;//向集合添加新的元素
    delete(element:setElement):void;//从集合移除一个元素
    has(element:setElement):boolean;//如果元素在集合中，返回true，否则返回false
    clear():void;//移除集合中的所有元素
    size():number;//返回集合所包含元素的数量
    values():any[];//返回一个包含集合中所有值的数组
}

class ClassSet {
    items:setItems<any> ={};

    has(element:setElement):boolean{
        return Object.prototype.hasOwnProperty.call(this.items,element);
        // return element in this.items;
    }

    add(element:setElement):boolean{
        if(!this.has(element)){
            this.items[element]=element
            return true
        }
        return false
    }

    delete(element:setElement):boolean{

        if(this.has(element)){
            delete this.items[element]            
            return true
        }

        return false
    }
    clear():void{
        this.items ={}
    }

    size():number{
        return Object.keys(this.items).length
    }

    values():any[]{
        var value:any[]=[];
        for( var key in this.items){
            value.push(this.items[key]);
        }

        return value
    }
    //并集
    union(otherSet:ClassSet):ClassSet{
        var unionSet:ClassSet = new ClassSet();
        this.values().forEach(element => {
            unionSet.add(element)
        });
        otherSet.values().forEach(element=>{
            unionSet.add(element)
        })

        return unionSet;
    }
    //交集
    interselection(otherSet:ClassSet):ClassSet{
        //可以比较两个集合的length来决定循环哪个集合的values，来节省性能
        var interselectionSet:ClassSet = new ClassSet();
        var values:any[] = this.values();

        for(var i:number=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                interselectionSet.add(values[i])
            }
        }

        return interselectionSet
    }
    //差集
    differnce(otherSet:ClassSet):ClassSet{
        var differenceSet:ClassSet = new ClassSet();
        var values = this.values();
        
        values.forEach(element=>{
            if(!otherSet.has(element)){
                differenceSet.add(element)
            }
        })

        return differenceSet;
    }
    //子集
    isSubsetOf(otherSet:ClassSet):boolean{
        if(this.size()> otherSet.size())return false

        // var values:any[] = otherSet.values();
        // return values.every(element=> this.has(element))
        var isSubset:boolean = true;
        this.values().every(element=>{
            if(!otherSet.has(element)){
                isSubset = false
                return false
            }
            return true
        })
        return isSubset;
    }
}

/**
 * 并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合 A∪B = {x | x ∈ A  x ∈ B}
 * 交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合 A∩B = {x | x ∈ A  x ∈ B}
 * 差集：对于给定的两个集合，放回一个包含所有存在于第一个集合且不存在于第二个集合的元素新集合 A-B={x|x ∈ A  x  B }
 * 子集：验证一个给定集合是否是另一集合的子集 A ⊆ B = {x | ∀x  A  x  B}
 * 
 */