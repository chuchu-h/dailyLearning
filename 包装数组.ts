var ArrayWrapper = function(nums) {
     this.arr=nums
};

ArrayWrapper.prototype.valueOf = function() {
    console.log('this000',this);

    return this.arr.reduce((acc,curr)=>{
        acc+=curr
        return acc
    },0)
}
console.log('ghk',Math.pow(3,2));

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    
    return `[${this.arr.toString()}]`
}
const obj1 = new ArrayWrapper([1,2]);
console.log('obj1',obj1.valueOf());


/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */