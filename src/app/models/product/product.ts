import {ProductStatus} from './product-status.enum';
import {Component} from '../component/component';

export interface Product {

  name: string;
  type: string;
  description: string;
  price: number;
  componentsTypes?: string[];
  productComponents?: Component[] | any[];
  status: ProductStatus;
  image: string;

}
