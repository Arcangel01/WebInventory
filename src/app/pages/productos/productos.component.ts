import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../shared/interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  fileName = 'Seleccionar imagen';

  fileToUpload = null;

  product: Product = new Product();

  formulario: FormGroup;

  imgURL = '../../../assets/img/camera.webp';
  categoria: any;

  constructor(private service: ProductService, private toast: ToastrService, private builder: FormBuilder) {
    this.formulario = this.builder.group({
      codigO_PRODUCTO: [''],
      nombrE_PRODUCTO: [''],
      descripcion: [''],
      cantidaD_PRODUCTO: [''],
      preciO_UNIDAD: [''],
      iD_CATEGORIA: [''],
      imageN_PROD: ['']
    });
   }

  ngOnInit() {
    this.obtCat();
  }

  updateControls(e): void {
    this.fileToUpload = e.target.files.item(0);
    this.fileName = this.fileToUpload.name;

    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.imgURL = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(value) {
    console.log(value);
    this.product = this.formulario.value;
    console.log(this.product);
    this.service.postProduct(this.product, this.fileToUpload)
    .subscribe(res => {
      console.log(res);
      this.formulario.reset(0);
      this.toast.success('Se registro con exito!');
    },
    err => {
      console.log(err);
      this.toast.error(err.error, 'No se registro');
    });
  }

  obtCat() {
    this.service.getCat()
    .subscribe(res => {
      this.categoria = res;
    },
    err => {
      console.log(err);
    });
  }

}
