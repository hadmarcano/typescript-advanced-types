// ANY
let anyVar: any;

anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;  // Stranger behaivor
console.log('anyVar',anyVar);

// anyVar.doSomething();  // Anything accepted but throw TypeError: anyVar.doSomething is not a function

// anyVar.toUpperCase(); // // Anything accepted but throw TypeError: anyVar.toUpperCase is not a function

// UNKNOWN TYPE


let unknownVar: unknown;

unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};
unknownVar = 'Hadcodes';
// unknownVar = false;

// unknownVar.doSomething(); // Verify that this method not exist.

// unknownVar.toUpperCase();
// Lint and alert that you need verify the data type to apply this string method.
if(typeof unknownVar === 'string'){
  unknownVar.toUpperCase();
  console.log('unknownVar',unknownVar);
}

// Forced to make a type verfy
if (typeof unknownVar === 'boolean'){
  let isNewV2: boolean = unknownVar;
  console.log(isNewV2);
}


// UNKNOWN TYPE IN FUNCTIONS

const parse = (str: string) : unknown => {
  return JSON.parse(str);
}

