import { faker } from '@faker-js/faker';
import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';
import { Sizes } from './products/product.model';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.datatype.uuid(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([
      'home',
      'sports',
      'man',
      'woman',
      'health',
      'clothes',
    ]),
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80,
});

findProducts({
  color: 'red',
  isNew: true,
});
