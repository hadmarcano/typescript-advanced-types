import { addProduct } from "./products/product.service";

addProduct({
  id: '1',
  title: 'P1',
  createdAt: new Date(),
  stock:90,
  category:{
    id:1,
    name: 'C1'
  }
});


