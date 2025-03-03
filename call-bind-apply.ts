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


// 原生JavaScript实现bind方法
Function.prototype.bind = function (context) {
  let self = this;
  return function () {
    return self.apply(context, arguments)
  }
}
// 原生JavaScript实现call方法
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw Error('Function.prototype.call is not a function')
  }
  context = context || globalThis;
  const fn = Symbol('fn')
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// 原生JavaScript实现apply方法
Function.prototype.apply = function (context, args) {
  if (typeof this !== 'function') {
    throw Error('Function.prototype.call is not a function')
  }
  if (args && !Array.isArray(args)) {
    throw Error('args must be array')
  }
  context = context || globalThis
  const fn = Symbol('fn')
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
  //  return this.call(context, ...args)
}
// 原生JavaScript实现bind方法
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw Error('Function.prototype.call is not a function')
  }
  const _this = this;
  return function (...args2) {
    if (this instanceof function) {
      return new _this(...args, ...args2)
    }
    return _this.call(context, ...args, ...args2)
  }
}
