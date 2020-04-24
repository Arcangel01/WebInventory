import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../shared/admin';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // admin: Admin[];
  URL = 'https://localhost:44394/api/admon/users';

  constructor(private http: HttpClient, private toast: ToastrService, private builder: FormBuilder) { }

  formulario = this.builder.group({
    FullName: ['', Validators.required],
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    Phone: [''],
    Password: ['', [Validators.required, Validators.minLength(4)]]
  });

  // Metodo para registrar user
  register() {
    const body = {
      FullName: this.formulario.value.FullName,
      UserName: this.formulario.value.UserName,
      Email: this.formulario.value.Email,
      Phone: this.formulario.value.Phone,
      Password: this.formulario.value.Password
    };
    return this.http.post('https://localhost:44394/api/user/register', body)
      .pipe(tap((res: any) => {
        if (res.succeeded) {
          this.toast.success('Registrado con exito!', 'INVENTORY');
          console.log(res);
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toast.error('Este usuario ya existe!', 'INVENTORY');
                break;
              default:
                this.toast.error(element.description, 'INVENTORY');
                break;
            }
          });
        }
      },
        err => {
          this.toast.error('No se logro registrar', 'INVENTORY');
          console.log(err);
        }));
  }

  // Obtener los datos del perfil
  getUserProfile() {
    const tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get('https://localhost:44394/api/profile', {headers : tokenHeader});
  }

  // Iniciar Sesion
  logueo(formData) {
    return this.http.post('https://localhost:44394/api/user/login', formData);
  }

  // Metodo para registrar un administrador
  addAdmin(admin: Admin) {
    return this.http.post<boolean>(this.URL, admin)
      .pipe(tap(res => {
        this.toast.success('Registrado con exito!', 'INVENTORY');
        console.log(res);
      },
        err => {
          this.toast.error('No se logro registrar', 'INVENTORY');
          console.log(err);
        }));
  }
}
