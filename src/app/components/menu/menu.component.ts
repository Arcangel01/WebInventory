import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/api/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  Profile;

  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
    this.service.getUserProfile()
    .subscribe(
      res => {
        this.Profile = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
