import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/_services/user.service';
import { Location} from '@angular/common';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
id: number;
user: Utilisateur;
submitted: false;

  constructor(private route: ActivatedRoute, private router: Router,
    public _router: Router, public _location: Location,
    private userService: UserService) { }

  ngOnInit() {
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
    this.gotoList();
    setTimeout(this.load, 1000);
  }

  load() {
     location.reload();
   }
  onSubmit() {
    this.updateUtilisateur();
  }

  gotoList() {
    this.router.navigate(['/utilisateur']);
  }
 refresh(): void {
    this._router.navigateByUrl('/utilisateur', { skipLocationChange: false }).then(() => {
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }
}
