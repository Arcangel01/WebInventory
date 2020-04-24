import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Factura } from '../shared/interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient, private toast: ToastrService, private builder: FormBuilder) { }

  URL = 'https://localhost:44394/api/factura/fact';

  getFacturas() {
    return this.http.get<Factura>(this.URL)
    .pipe(tap(x => {
        console.log(x);
    },
    err => {
      console.log(err);
    }));
  }

  postFacturas(factura: Factura) {
    return this.http.post(this.URL, factura)
    .pipe(tap(x => {
    },
    err => {
      console.log(err);
    }));
  }
}
