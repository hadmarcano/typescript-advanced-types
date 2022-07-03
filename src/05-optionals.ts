export const createProduct = (
  id: number | string,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    // isNew: isNew || false,
    // stock: stock || 10,
    isNew: isNew ?? false,
    stock: stock ?? 10,
  };
};

// Trouble of OR(||) operators
// 0 === false
// '' === false
// false === false
// To avoid this behaivor, the new versions of javascript
// provides the Nullish-coalescing(??).



const productOne = createProduct(1);

const strangeBehaivorProduct = createProduct(1, false, 0);

console.log("productOne",productOne);
console.log("strangeBehaivorProduct",strangeBehaivorProduct);
