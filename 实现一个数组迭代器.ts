const myArr=[10,20,30,40]
const arrayIterator={
    index:0,
    next:()=>{        
        if(this.index<=myArr.length){
            return {value:myArr[this.index++],done:false}
        }else{
            return {value:undefined,done:true}
        }
    }
}
console.log(arrayIterator.next())