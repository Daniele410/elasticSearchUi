import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all products', () => {
    const mockProducts: Product[] = [
      { id: '1', name: 'Product 1', price: 100, description: 'Description 1' },
      { id: '2', name: 'Product 2', price: 200, description: 'Description 2' }
    ];

    service.getAllProducts().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('http://localhost:8080/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);

  });

  it('should create a new product', () => {
    const newProduct: Product = {
      id: '3',
      name: 'Product 3',
      price: 300,
      description: 'Description 3'
    };
  
    service.createProduct(newProduct).subscribe((product) => {
      expect(product).toEqual(newProduct);
    });
  
    const req = httpMock.expectOne('http://localhost:8080/products');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newProduct);
    req.flush(newProduct);
  });
});
