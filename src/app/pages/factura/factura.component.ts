import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { FacturaService } from '../../api/factura.service';
import { ToastrService } from 'ngx-toastr';
import { Factura } from 'src/app/shared/interface';
import { ProductService } from '../../api/product.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  factura: Factura = new Factura();

  product: any;

  formFactura: FormGroup;

  sub = this.factura.cantidad * this.factura.precio;

  constructor(private service: FacturaService,
              private serviceProd: ProductService, private toast: ToastrService, private builder: FormBuilder) {
    this.formFactura = this.builder.group({
      documentO_C: [''],
      nombrE_C: [''],
      apellidO_C: [''],
      telefonO_C: [''],
      fecha: new Date().toISOString(),
      iD_PRODUCTO: [''],
      cantidad: [''],
      precio: [''],
      subtotal: [''],
      total: ['']
    });
   }

  ngOnInit() {
    this.getProd();
  }

  onSubmit(value) {
    this.factura = this.formFactura.value;
    console.log(this.factura);
    this.service.postFacturas(this.factura)
    .subscribe( res => {
      this.formFactura.reset(0);
      this.toast.success('Factura registrada sactisfactoriamente!');
    },
    err => {
      console.log(err);
      this.toast.error(err.error, 'No se pudo registrar la factura');
    });
  }

  getProd() {
    this.serviceProd.getProduct()
    .subscribe(res => {
      this.product = res;
    },
    err => {
      console.log(err);
    });
  }

}
