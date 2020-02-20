"use strict";
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
;
var ClassSet = /** @class */ (function () {
    function ClassSet() {
        this.items = {};
    }
    ClassSet.prototype.has = function (element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
        // return element in this.items;
    };
    ClassSet.prototype.add = function (element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    };
    ClassSet.prototype.delete = function (element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    };
    ClassSet.prototype.clear = function () {
        this.items = {};
    };
    ClassSet.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    ClassSet.prototype.values = function () {
        var value = [];
        for (var key in this.items) {
            value.push(this.items[key]);
        }
        return value;
    };
    //并集
    ClassSet.prototype.union = function (otherSet) {
        var unionSet = new ClassSet();
        this.values().forEach(function (element) {
            unionSet.add(element);
        });
        otherSet.values().forEach(function (element) {
            unionSet.add(element);
        });
        return unionSet;
    };
    //交集
    ClassSet.prototype.interselection = function (otherSet) {
        //可以比较两个集合的length来决定循环哪个集合的values，来节省性能
        var interselectionSet = new ClassSet();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                interselectionSet.add(values[i]);
            }
        }
        return interselectionSet;
    };
    //差集
    ClassSet.prototype.differnce = function (otherSet) {
        var differenceSet = new ClassSet();
        var values = this.values();
        values.forEach(function (element) {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    };
    //子集
    ClassSet.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size())
            return false;
        // var values:any[] = otherSet.values();
        // return values.every(element=> this.has(element))
        var isSubset = true;
        this.values().every(function (element) {
            if (!otherSet.has(element)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    };
    return ClassSet;
}());
/**
 * 并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合 A∪B = {x | x ∈ A  x ∈ B}
 * 交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合 A∩B = {x | x ∈ A  x ∈ B}
 * 差集：对于给定的两个集合，放回一个包含所有存在于第一个集合且不存在于第二个集合的元素新集合 A-B={x|x ∈ A  x  B }
 * 子集：验证一个给定集合是否是另一集合的子集 A ⊆ B = {x | ∀x  A  x  B}
 *
 */ 
