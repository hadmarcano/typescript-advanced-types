export const createProductDefault = (
  id: number | string,
  isNew: boolean= true,
  stock: number= 10
) => {
  return {
    id,
    isNew,
    stock
  };
};

console.log(createProductDefault(2));
