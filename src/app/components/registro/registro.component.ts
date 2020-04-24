import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/api/data.service';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Admin } from '../../shared/admin';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  admin: Admin = new Admin();

  constructor(private route: Router, public service: DataService, private builder: FormBuilder) {

   }

  ngOnInit() {
    this.service.formulario.reset();
  }

  guardar() {
    this.service.register()
    .subscribe( (x: any) => {
      this.service.formulario.reset();
      console.log(x);
    },
    err => {
      console.log(err);
    });
  }


  // register(value) {
  //   this.admin = this.formulario.value;
  //   console.log(this.admin);
  //   this.service.addAdmin(this.admin)
  //   .subscribe(x => {
  //     console.log('se guardo');
  //     this.admin = new Admin();
  //   },
  //   err => {
  //     console.log('no se guarda' + err);
  //   });
  // }

  irLogin() {
      this.route.navigateByUrl('login');
  }

}
