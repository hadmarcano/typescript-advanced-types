import { Sizes, Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) =>{
  // data.id = "a3b435c4d"; --> Cannot assign to 'id' because it is a read-only property.
  products.push(data);
};
