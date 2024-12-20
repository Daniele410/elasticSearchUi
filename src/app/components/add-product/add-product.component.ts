import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product: Product = { id: '', name: '', description: '', price: 0 };

  constructor(private productService: ProductService) { }

  saveProduct(): void {
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        alert('Prodotto aggiunto con successo!');
        this.product = {id:'', name: '', description: '', price: 0 }; // Reset del form
      },
      error: (err) => console.error(err)
    });
  }

}
