import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product: Product = { id: '', name: '', description: '', price: 0 };

  constructor(private productService: ProductService) { }

  saveProduct(): void {
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        alert('add product whit success!');
        this.product = { id: '', name: '', description: '', price: 0 }; // Reset form
      },
      error: (err) => console.error(err)
    });
  }
}
