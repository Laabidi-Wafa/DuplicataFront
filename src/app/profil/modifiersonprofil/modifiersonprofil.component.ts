import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'app/board-admin/Utilisateur';
import { UserService } from 'app/_services/user.service';
import { Location } from '@angular/common';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-modifiersonprofil',
  templateUrl: './modifiersonprofil.component.html',
  styleUrls: ['./modifiersonprofil.component.css']
})
export class ModifiersonprofilComponent implements OnInit {
  id: number;
  user: Utilisateur;
  currentUser: any;
  submitted: false;

constructor(private route: ActivatedRoute, public _router: Router, public _location: Location
  , private router: Router, private userService: UserService, private token: TokenStorageService) { }

    ngOnInit() {
      this.currentUser = this.token.getUser();
      this.user = new Utilisateur();

      this.id = this.route.snapshot.params['id'];

      this.userService.getUtilisateur(this.id)
        .subscribe(data => {
          console.log(data)
          this.user = data;
        }, error => console.log(error));
    }
    updateUtilisateur() {
      this.userService.updateUtilisateur(this.id, this.user)
        .subscribe(data => console.log(data), error => console.log(error));
      this.user = new Utilisateur();
      this.id = this.route.snapshot.params['id'];
      this.userService.getUtilisateur(this.id)
        .subscribe(data => {
          console.log(data)
          this.user = data;
        }, error => console.log(error));
      this.gotoprofil();
    }

    onSubmit() {
      this.updateUtilisateur();
    }

    gotoprofil() {
      this.router.navigate(['examples/profile']);
    }
    refresh(): void {
      this._router.navigateByUrl('examples/profile', { skipLocationChange: false }).then(() => {
        console.log(decodeURI(this._location.path()));
        this._router.navigate([decodeURI(this._location.path())]);
      });
    }
  }

