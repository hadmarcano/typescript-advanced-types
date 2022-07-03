const prices: (number | string)[] = [1,3,4,2,2,'as'];

prices.push(1);
prices.push('2');

console.log(prices);

let userTuples: [string,number, boolean];
userTuples= ['hadcode',22,true];

console.log(userTuples);

// Destructuring a tuple
const [username, code] = userTuples;

console.log('destructured', username);
console.log('destructured', code);
