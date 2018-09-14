import {Injectable} from '@angular/core';
import {Constants} from '../../models/constants';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../models/products/product.model';
import {Observable} from 'rxjs';
import {CoreModule} from '../core.module';
import {UpdatedProduct} from '../../models/products/updated-product';

@Injectable({
  providedIn: CoreModule
})
export class ProductService {

  private readonly apiPrefix: string;

  constructor(private http: HttpClient) {
    this.apiPrefix = Constants.BASE_URL + Constants.API_PREFIX;
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiPrefix + Constants.GET_ALL_PRODUCTS_API_CALL);
  }


  public getActiveProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiPrefix + Constants.GET_ACTIVE_PRODUCTS_API_CALL);
  }

  public createProduct(product: Product) {
    return this.http.post(this.apiPrefix + Constants.CREATE_PRODUCT_API_CALL, product);
  }

  public updateProduct(updatedProduct: UpdatedProduct) {
    return this.http.post(this.apiPrefix + Constants.UPDATE_PRODUCT_API_CALL, updatedProduct);
  }

  public deleteProduct(productType: string) {
    return this.http.post(this.apiPrefix + Constants.DELETE_PRODUCT_API_CALL, productType);
  }
}
