import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/board-admin/Utilisateur';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    private roles: string[];
    currentUser: any;
    isLoggedIn = false;
    isLoggedOut = false;
    showAdminBoard = false;
    showAgent3TBoard = false;
    showCitoyenBoard = false;
    showAGENTNATIONALBoard = false;
    user: Utilisateur;
    username: string;

    date: {year: number, month: number};
    data: Date = new Date();
    constructor(public location: Location, private token: TokenStorageService ,private element: ElementRef, public _router: Router, public _location: Location,
        private router: Router, private tokenStorageService: TokenStorageService) {
        this.sidebarVisible = false;
    }
    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        this.user = this.token.getUser();
        this.currentUser = this.token.getUser();
        if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        
        this.roles = user.roles;
        this.showAGENTNATIONALBoard = this.roles.includes('ROLE_AGENTNATIONAL');
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showCitoyenBoard = this.roles.includes('ROLE_CITOYEN');
        this.showAgent3TBoard = this.roles.includes('ROLE_AGENT3T');
        this.username = user.username;

    }
    }
    logout() {
      this.tokenStorageService.signOut();
      this.router.navigate(['/vehicule']);
    }
  refresh(): void {
    this._router.navigateByUrl('/vehicule', { skipLocationChange: false }).then(() => {
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
    window.location.reload();
  }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }
    detailprofile(id: number) {
        this.router.navigate(['detailP', id]);
      }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === '/documentation' ) {
            return true;
        } else {
            return false;
        }

    }
    envoyerdemande() {
        this.router.navigate(['demande']);
    
      }
}
