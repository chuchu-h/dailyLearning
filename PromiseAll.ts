const a = (promises) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let arr = [];
        promises.forEach(element => {
            element().then((res,index) => {
                count++;
                arr[index]=res
                if(count===promises.length){
                    resolve(arr)
                }
            }, rej => {
                reject(rej)
            })
        });
    })
}
