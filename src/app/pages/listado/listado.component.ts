import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { Product } from '../../shared/interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  Product: Product;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getProd();
  }

  getProd() {
    this.service.getProduct()
    .subscribe(res => {
      this.Product = res;
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }

}
