function* generator() {
    const x = yield 1;
    const y = yield x + 2;
    yield y + 3;
  }
  
  const gen = generator();
  
  console.log(gen.next());    // { value: 1, done: false }
  console.log(gen.next(10));  // { value: 12, done: false } (x = 10)
  console.log(gen.next(20));  // { value: 23, done: false } (y = 20)
  console.log(gen.next());    // { value: undefined, done: true }