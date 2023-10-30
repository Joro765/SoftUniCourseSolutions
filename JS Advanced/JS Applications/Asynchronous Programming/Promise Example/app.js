let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Just Married...");
        } else {
            reject("Sorry :(");
        }
    }, 3000)
});

console.log(promise);

promise.then((result) => {
    console.log(result);
})


promise.catch((reason) => {
    console.log(reason);
})