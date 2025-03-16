
/**
 * for循环和forEach不能响应数组长度变化
 */
// var flat = function (arr, n) {
//     for(let i=0;i<n;i++){
//         for(let j=0;j<arr.length;j++){
//             if (typeof arr[j] === 'object' && !!arr[j].length) {
//                 arr.splice(j,1,...arr[j])
//                 j+=arr[j].length-1
//             }
//         }
//     }
//      return arr
//  };
// var flat = function (arr, n) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         console.log('length',arr.length);
        
//         if (Array.isArray(arr[j])) {
//           arr.splice(j, 1, ...arr[j]);
//           j += arr[j].length - 1; // 问题：此处 j 的调整可能不准确
//         }
//       }
//     }
//     return arr;
//   };
  
/**
 * 递归解法
 */
var flat = function (arr, n) {
    let res = []
    const flattening = (nums, l) => {
        for (const num of nums) {
            if (Array.isArray(num) && l > 0) {
                flattening(num, l - 1)
            }else{
                res.push(num)
            }
        }
    }
    flattening(arr,n)
    return res
};
 const arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],n=1
console.log('结果9',flat(arr,n))