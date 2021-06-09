import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    showProprietaireBoard = false;
    private roles: string[];
    isLoggedIn = false;

    constructor( public _router: Router, public _location: Location,
         private tokenStorageService: TokenStorageService ,private router: Router) {
         }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
          const user = this.tokenStorageService.getUser();
          this.roles = user.roles;
          this.showProprietaireBoard = this.roles.includes('ROLE_PROPRIETAIRE');
      }
    }
Tablebord() {
    if(this.showProprietaireBoard)
    {
      this.router.navigate(['dashboard']);
    }
    else
    {
        console.log("je suis une simple client");
    }
}
}
