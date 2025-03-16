// 方法超时
var join = function (arr1, arr2) {
    let all = [...arr1, ...arr2]
   const result= all.reduce((accum, curr) => {
        let existItem=accum.find((item)=>item.id===curr.id)
        if(existItem){
            existItem=Object.assign(existItem,curr)
        }else{
            accum.push(curr)
        }
        return accum
    }, [])
    return result
};
const arr1=[{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
const arr2=[{"id":2,"o":48,"z":84,"y":61}]
console.log('结果',join(arr1,arr2))


//  暴力法
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join2= function (arr1, arr2) {
    let arrAll=arr1.concat(arr2)
    const result={}
    arrAll.forEach(item=>{
        result[item.id]={...result[item.id],...item}
    })
    return Object.values(result).sort((a,b)=>a.id-b.id)
};