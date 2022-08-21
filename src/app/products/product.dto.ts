import { Product } from './product.model';

// DTOs for Product Model...

// we will extend from CreateProductDto because us need add a new attributte
// that not exist in the Product Type...

// OMIT
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// PICK
type showProduct = Pick<
  Product,
  'title' | 'description' | 'price' | 'color' | 'stock'
>;

// PARTIAL
// We make Partial from "CreateProductDto" because in this type have omit fields that we can't update.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// REQUIRED
type CreateProductForced = Required<Product>;

// READONLY
// Only permit read properties that the user send to find, but this properties don't be modified by the services...
export interface FindProductDto extends Readonly<Partial<Product>> {}
