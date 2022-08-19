import { faker } from '@faker-js/faker';
import { addProduct, products} from "./products/product.service";
import {Sizes} from "./products/product.model";


for (let i = 0; i < 50; i++) {

  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock:faker.datatype.number({min:10, max:100}),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(),10),
    size:faker.helpers.arrayElement(['S','M','L','XL']),
    category:{
      id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: faker.helpers.arrayElement(['home','sports','man','woman','health','clothes']),
    },
    isNew:faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['home','sports','man','woman','health','clothes']),
  });

};

console.log(products);


