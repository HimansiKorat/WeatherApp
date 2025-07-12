import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../service/product-service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {
  product: ProductModel = new ProductModel();
  productList: ProductModel[] = [];
  isEdit = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProducts().subscribe(res => this.productList = res);
  }

  saveProduct() {
    if (this.isEdit && this.product.id != null) {
      this.productService.update(this.product.id, this.product).subscribe(() => {
        this.getAll();
        this.resetForm();
      });
    } else {
      const { id, ...data } = this.product; 
      this.productService.save(data).subscribe(() => {
        this.getAll();
        this.resetForm();
      });
    }
  }

  editProduct(prod: ProductModel) {
    this.product = { ...prod };
    this.isEdit = true;
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => this.getAll());
  }

  resetForm() {
    this.product = new ProductModel();
    this.isEdit = false;
  }
}
