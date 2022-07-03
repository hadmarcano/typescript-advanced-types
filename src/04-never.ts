// NEVER TYPE

const withoutEnd = () => {
  while(true){
    console.log('nunca pares de aprender');
  }
};

// withoutEnd => () => never


const fail = (message:string) => {
  throw new Error(message);
};

const example = (input:unknown) =>{
  if(typeof input === 'string'){
    return 'Es un string';
  }else if(Array.isArray(input)){
    return 'Es un array';
  }else{
    return fail('No hizo match');
  }
};

// console.log(example('Hola es hector'));
// console.log(example([1,2,3,'hola']));
console.log(example(123));
console.log('Console después del fallo');
