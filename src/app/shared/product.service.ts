import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是商品的一个描述，正在学习Angular往上哎呀呀中', ['A', 'B']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是商品的二个描述，正在学习Angular往上哎呀呀中', ['A', 'C']),
    new Product(3, '第三个商品', 3.99, 1.5, '这是商品的三个描述，正在学习Angular往上哎呀呀中', ['A']),
    new Product(4, '第四个商品', 4.99, 3.5, '这是商品的四个描述，正在学习Angular往上哎呀呀中', ['B']),
    new Product(5, '第五个商品', 5.99, 4.5, '这是商品的五个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'C']),
    new Product(5, '第六个商品', 7.99, 2.5, '这是商品的六个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'D']),
  ]

  private comments: Comment[] = [
    new Comment(1, 1, '2017-01-01 22:22:22', 'shenzm1', 3, '东西不错1'),
    new Comment(2, 1, '2017-02-02 22:22:22', 'shenzm2', 4, '东西不错2'),
    new Comment(3, 3, '2017-03-03 22:22:22', 'shenzm3', 5, '东西不错3'),
    new Comment(4, 2, '2017-04-05 22:22:22', 'shenzm4', 2, '东西不错4')
  ]
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id );
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

export class Comment {
  constructor(
              public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string
  ){

  }
}
