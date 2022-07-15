import { BaseModel } from "../base.model";
import { User } from "../users/user.model";
import {Product} from "./../products/product.model";

export interface Order extends BaseModel {
  products: Product[];
  user: User;
}
