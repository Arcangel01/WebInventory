import { Component, OnInit } from '@angular/core';
import { Factura } from '../../shared/interface';
import { FacturaService } from '../../api/factura.service';

@Component({
  selector: 'app-factura-listado',
  templateUrl: './factura-listado.component.html',
  styleUrls: ['./factura-listado.component.css']
})
export class FacturaListadoComponent implements OnInit {

  Factura: Factura;

  constructor(private service: FacturaService) { }

  ngOnInit() {
    this.service.getFacturas()
    .subscribe( res => {
      this.Factura = res;
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }

}
