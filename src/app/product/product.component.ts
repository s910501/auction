import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
      value => this.keyword = value
    )
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // this.products.push(new Product(7, '第七个商品', 7.99, 2.5, '这是商品的六个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'D']));
  }


}

