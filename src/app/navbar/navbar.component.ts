import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	isLoggedIn = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkLogin();

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }

  checkLogin() {
    this.authenticationService.isLoggedIn().subscribe((data)=>{
      if (data) {
        this.isLoggedIn = localStorage.getItem('currentUser') ? true : false;
      } else {
        this.isLoggedIn = false;
      }
    });


    this.isLoggedIn = localStorage.getItem('currentUser') ? true : false;
  
  }
}
