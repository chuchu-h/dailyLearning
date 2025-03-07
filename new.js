// // 手写new操作符
// function myNew(ctor, ...args) {
//   const obj = Object.create(ctor.prototype);
//   ctor.apply(obj, args);
//   return obj;
// }
const obj9 = { name: "123" };
// const obj2 = myNew(obj9)
// console.log(obj2.name)

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
function objectFactory() {
  const obj = {};
  const Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  // console.log("arguments", arguments);

  // console.log("Constructor", Constructor);

  return obj;
}
let awei = objectFactory(Person, "awei", 23);
console.log(awei);
const test = (Constructor, ...args) => {
  const obj = {};
  obj.__proto__ = Constructor.prototype;
  const res = Constructor.apply(obj, args);
  return res instanceof Object ? res : obj;
};
// console.log(objectFactory(obj9, "aw0ei", 93));

function final(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);
  console.log("res", res, res instanceof Object);

  return res instanceof Object ? res : obj;
}
console.log("final", final(Person, "aw0ei", 93));
