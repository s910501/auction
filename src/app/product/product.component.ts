import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是商品的一个描述，正在学习Angular往上哎呀呀中', ['A', 'B']),
      new Product(2, '第二个商品', 2.99, 2.5, '这是商品的二个描述，正在学习Angular往上哎呀呀中', ['A', 'C']),
      new Product(3, '第三个商品', 3.99, 1.5, '这是商品的三个描述，正在学习Angular往上哎呀呀中', ['A']),
      new Product(4, '第四个商品', 4.99, 3.5, '这是商品的四个描述，正在学习Angular往上哎呀呀中', ['B']),
      new Product(5, '第五个商品', 5.99, 4.5, '这是商品的五个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'C']),
      new Product(5, '第六个商品', 7.99, 2.5, '这是商品的六个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'D']),
    ]
    this.products.push(new Product(7, '第七个商品', 7.99, 2.5, '这是商品的六个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'D']));
  }


}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){}
}
