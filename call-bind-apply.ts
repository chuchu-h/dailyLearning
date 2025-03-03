// call是函数的方法  
function fun(color, age) {
  console.log(this.name + color + age)
}
let obj = {
  name: 'obj'
}
/**
 * 可以调用函数,可以改变函数中this的指向 
 * 第一个参数是改变this的对象
 * 后面的参数都是函数的参数
 *  */
fun.call(obj, '红色', 18)

/**
 * apply和call的区别是第二个参数是数组
 * 第一个参数是改变this的对象
 * 后面的参数都是函数的参数
 */
fun.apply(obj, ['红色', 18])


/**
 * bind是函数的方法  不会调用函数
 * 第一个参数是改变this的对象
 * 后面的参数都是函数的参数
 * 返回的是一个函数
 */
let fun2 = fun.bind(obj, '红色', 18)
fun2()
