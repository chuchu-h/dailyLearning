/** 1.原型链继承
 * 优点：父类方法可以复用
 * 缺点：1.引用类型（对象，数组）会被子类共享，更改一个子类的数据，其他子类的数据会受到影响
 * 2.无法向父类传参
 */
function Person(sth) {
  this.xixi = sth
  this.name = '张淑兰',
    this.eat = ['苹果', '香蕉', '橘子'],
    this.say = function () {
      console.log('我是一个好人')
    }
}
function Child() {
  this.age = 18
}
Child.prototype = new Person('99')
const one = new Child()
const two = new Child()
one.eat.push('西瓜')
one.name = '舒兰一号'
//1.引用类型（对象，数组）会被子类共享，更改一个子类的数据，其他子类的数据会受到影响 输出结果 ['苹果', '香蕉', '橘子', '西瓜' ] 张淑兰
console.log(two.eat, two.name)
//2.无法向父类传参 输出结果 99 99
console.log(one.xixi, two.xixi)

console.log('==========分割线============');

/**
 * 2.构造函数继承
 * 优点：父类的引用类型的数据不会被子类共享
 * 缺点：子类不能访问父类原型属性上的方法和参数  
 */
function Person2(sth) {
  this.xixi = sth
  this.name = '张淑兰',
    this.eat = ['苹果', '香蕉', '橘子'],
    this.say = function () {
      console.log('我是一个好人')
    }
}
Person2.prototype.sayPrototype = function () {
  console.log('我是原型链上的方法')
}
function Child2(sth) {
  Person.call(this, sth)
}

const one2 = new Child2('one2')
const two2 = new Child2('two2')
one2.eat.push('西瓜')
one2.name = '舒兰一号'
// 报错  one2.sayPrototype is not a function
// one2.sayPrototype()

//1.引用类型（对象，数组）会被子类共享，更改一个子类的数据，其他子类的数据会受到影响
//   输出结果 ['苹果', '香蕉', '橘子'] 张淑兰
console.log(two2.eat, two2.name)
//one2 two2
console.log(one2.xixi, two2.xixi)

console.log('==========分割线============');


/**
 * 3.组合继承(原型链+构造函数)
 * 优点：1.引用类型（对象，数组）不会被子类共享，更改一个子类的数据，其他子类的数据不会受到影响
 * 2.可以向父类传参
 * 3.父类可以复用
 * 缺点：1.父类会被调用两次 生成的子类原型上会有父类原型上的方法和参数  有两份了就 会影响性能
 */
function Person3(sth) {
  this.xixi = sth
  this.name = '张淑兰',
    this.eat = ['苹果', '香蕉', '橘子'],
    this.say = function () {
      console.log('我是一个好人')
    }
}
Person3.prototype.sayPrototype = function () {
  console.log('我是原型链上的方法 Person3')
}
function Child3(sth) {
  Person.call(this, sth)
}
Child3.prototype = new Person3('one3')
const one3 = new Child3('one3')
const two3 = new Child3('two3')
one3.eat.push('西瓜')
one3.name = '舒兰一号'
// 报错  one2.sayPrototype is not a function
one3.sayPrototype()

//1.引用类型（对象，数组）会被子类共享，更改一个子类的数据，其他子类的数据会受到影响
//   输出结果 ['苹果', '香蕉', '橘子'] 张淑兰
console.log(two3.eat, two3.name,)
console.log(one3, 'fenge', one3.prototype);

//one3 two3
console.log(one3.xixi, two3.xixi)

console.log('==========分割线============');


/**
 * 4.寄生组合继承
 * 目前最优的继承方案 
 */
function Person4(sth) {
  this.xixi = sth
  this.name = '张淑兰',
    this.eat = ['苹果', '香蕉', '橘子'],
    this.say = function () {
      console.log('我是一个好人')
    }
}
Person3.prototype.sayPrototype = function () {
  console.log('我是原型链上的方法 Person3')
}
function Child4(sth) {
  Person.call(this, sth)
}
Child4.prototype = Object.create(Person4.prototype)
Child4.prototype.constructor = Child4
const one4 = new Child4('one3')
const two4 = new Child4('two3')
one4.eat.push('西瓜')
one4.name = '舒兰一号'
// 报错  one2.sayPrototype is not a function
one4.sayPrototype()

//1.引用类型（对象，数组）会被子类共享，更改一个子类的数据，其他子类的数据会受到影响
//   输出结果 ['苹果', '香蕉', '橘子'] 张淑兰
console.log(two4.eat, two4.name,)
console.log(one4, 'fenge', one4.prototype);

//one2 two2
console.log(one4.xixi, two4.xixi)
// 自己实现寄生组合继承
function Animal() {

}
function Cat() {
  Animal.call(this)
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat


console.log('==========分割线============');

/**
 * 5. ES6 extends 关键字实现逻辑
 */
class Person5 {
  constructor(name) {
    this.name = name
  }
  // 原型方法
  // 即 Person.prototype.getName = function() { }
  // 下面可以简写为 getName() {...}
  getName = function () {
    console.log('Person:', this.name)
  }
}
class Gamer extends Person5 {
  constructor(name, age) {
    // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
    super(name)
    this.age = age
  }
}
const juiceice = new Gamer('juiceice', 20)
juiceice.getName() // 成功访问到父类的方法
