const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');
        reject('Error message')
    }, 5000)    
})
console.log('before')

promise.then((data) => {
    console.log('1', data)
}).catch((err) => {
    console.log(err)
})


console.log('after')