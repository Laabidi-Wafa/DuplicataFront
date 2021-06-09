import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'app/board-admin/Utilisateur';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { UserService } from 'app/_services/user.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentUser: any;
  user: any;
  id: number;
  private roles: string[];
  isLoggedIn = false;
  showCitoyenBoard = false;
  constructor(private token: TokenStorageService, private route: ActivatedRoute,
     private router: Router, private userService: UserService, private tokenStorageService: TokenStorageService)  { }
  ngOnInit() {
    this.user = this.token.getUser();
    this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  if (this.isLoggedIn) {
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;
    this.showCitoyenBoard = this.roles.includes('ROLE_CITOYEN');
}
  }
  updateUtilisateur(id: number) {
    this.router.navigate(['modifier', id]);
  }
  detailprofile(id: number) {
    this.router.navigate(['detailP', id]);
  }
}
