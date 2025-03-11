async function sleep(millis) {
  return setTimeout(() => { }, millis)
}


let t = Date.now()
debugger
sleep(100).then(() => console.log(Date.now() - t)) // 100
