import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserAuth } from '../app-user-auth';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  securityObject: AppUserAuth = null;

  constructor ( private router: Router, private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
}


  ngOnInit() {
  }
  addProduct() {}

}