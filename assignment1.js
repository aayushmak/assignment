// using callback

function sumOfFirstNNaturalNumbers(n, callback) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    callback(sum);
}

sumOfFirstNNaturalNumbers(4, (result) => {
    console.log(`Sum using callback: ${result}`);
});

//using promises

function sumOfFirstNNaturalNumbersPromise(n) {
    return new Promise((resolve, reject) => {
        if (n < 1) {
            reject('n must be a positive integer');
        } else {
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            resolve(sum);
        }
    });
}

sumOfFirstNNaturalNumbersPromise(4)
    .then((result) => {
        console.log(`Sum using promises: ${result}`);
    })
    .catch((error) => {
        console.error(error);
    });


//using async/await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function sumFirstNNaturalNumbersasync(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      
      await delay(0); 
      sum += i;
    }
    return sum;
  }
  
  async function main() {
    const result = await sumFirstNNaturalNumbersasync(4);
    console.log("Sum using async/await", ":",  result);
  }
  main();
